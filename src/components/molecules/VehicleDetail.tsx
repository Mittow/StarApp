import React from "react";
import { NoticeCell } from "../atoms/NoticeCell";
import { VehicleService } from "../../services/vehicleService";
import { LoadingIndicator } from "../atoms/LoadingIndicator";

export const VehicleDetail: React.FC<{ key: number; vehicleURL: string }> = ({ vehicleURL }) => {

  const { allVehicles, isLoading, error } = VehicleService(vehicleURL);
  
  return (
    <div className="h-[49px] border-b border-[rgba(0,0,0,0.3)] flex items-center">
      <span className="font-bold text-[rgba(0,0,0,0.5)]">
        { 
          error ? <NoticeCell /> :
          isLoading ? <LoadingIndicator /> :
          `${allVehicles}`
        }
      </span>
    </div>
  );
};
