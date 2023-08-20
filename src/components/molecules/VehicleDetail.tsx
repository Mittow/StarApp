import React from 'react';
import { PVehicleDetailModel } from '../../models/p.vehicle.detail.model';

export const VehicleDetail: React.FC<PVehicleDetailModel> = ({ vehicle }) => {
  return (
    <div className='h-[49px] border-b border-[rgba(0,0,0,0.3)] flex items-center'>
      <span className='font-bold text-[rgba(0,0,0,0.5)]'>{ vehicle }</span>
    </div>
  )
}
