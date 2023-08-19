import React from 'react';

interface Props {
  vehicle: string;
}

export const VehicleDetail: React.FC<Props> = ({ vehicle }) => {
  return (
    <div className='h-[49px] border-b border-[rgba(0,0,0,0.3)] flex items-center'>
      <span className='font-bold text-[rgba(0,0,0,0.5)]'>{ vehicle }</span>
    </div>
  )
}
