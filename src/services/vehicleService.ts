import React from 'react'
import { vehicleApi } from '../api/vehicleApi';
import { Utils } from '../utils/index';
import { VehicleDetailPropModel } from '../models/vehicleDetailPropModel';

export const VehicleService = (vehicleURL: string) => {
  
  const [allVehicles, setAllVehicles] = React.useState<VehicleDetailPropModel>();
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useEffect(() => {
    Utils.getEndpoint(vehicleURL)
      .then((endpoint) => getVehicleNames(endpoint))
      .catch((e) => setError(e));
  }, [vehicleURL]);

  function getVehicleNames(endpoint: string | undefined) {
    if (!endpoint) return;
    setIsLoading(true);
    vehicleApi
      .getAllVehicles(endpoint)
      .then((response) => {
        setAllVehicles(response.data?.name);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return { allVehicles, isLoading, error }
}
