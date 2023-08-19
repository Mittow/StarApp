import React from 'react'

interface Props {
  feature: string;
  value: string;
}

export const FeatureDetail: React.FC<Props> = ({ feature, value }) => {
  return (
    <div className='h-[49px] border-b border-[rgba(0,0,0,0.3)] flex flex-row justify-between items-center'>
      <span className='font-bold text-[rgba(0,0,0,0.5)] flex-auto'>{ feature }</span>
      <span className='font-bold text-[rgba(0,0,0,1)]'>{ value }</span>
    </div>
  )
}
