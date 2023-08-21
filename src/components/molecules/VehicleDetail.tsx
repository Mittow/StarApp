import React from "react";
import { PVehicleDetailModel } from "../../models/p.vehicle.detail.model";
import { vehicleApi } from "../../api/vehicle.api";
import { NoticeCell } from "../atoms/NoticeCell";
import { LoadingCell } from "./LoadingCell";

export const VehicleDetail: React.FC<{ key: number; vehicleURL: string }> = ({ vehicleURL }) => {

  let contenido;
  const [allVehicle, setAllVehicle] = React.useState<PVehicleDetailModel>();
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useEffect(() => {
    //* OBTENEMOS EL ID DE LA URL *//
    getEndpoint(vehicleURL)
      .then((endpoint) => getVehicleNames(endpoint))
      .catch((e) => setError(e));
  }, [vehicleURL]);
  
  function getEndpoint (vehicleURL: string) {
    const endpoint = vehicleURL?.split('/').filter(Boolean).pop();
    return Promise.resolve(endpoint);
  }

  //* CONSUMIENDO API (VEHICLES) *//
  function getVehicleNames(endpoint: string | undefined) {
    if (!endpoint) return;
    setIsLoading(true);
    vehicleApi
      .getAll(endpoint)
      .then((response) => {
        setAllVehicle(response.data?.name);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  if (error) {
    contenido = (
      <NoticeCell />
    );
  } else if (isLoading) {
    contenido = <LoadingCell />;
  } else {
    contenido = `${allVehicle}`
  }

  return (
    <div className="h-[49px] border-b border-[rgba(0,0,0,0.3)] flex items-center">
      <span className="font-bold text-[rgba(0,0,0,0.5)]">
        { contenido }
      </span>
    </div>
  );
};
