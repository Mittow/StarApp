import React from 'react'
import { PFeatureDetailModel } from '../../models/p.feature.detail.model'

export const FeatureDetail: React.FC<PFeatureDetailModel> = ({ feature, value }) => {
  return (
    <div className='h-[49px] border-b border-[rgba(0,0,0,0.3)] flex flex-row justify-between items-center'>
      <span className='font-bold text-[rgba(0,0,0,0.5)] flex-auto'>{ feature ?? '-' }</span>
      <span className='font-bold text-[rgba(0,0,0,1)]'>{ value ?? '.' }</span>
    </div>
  )
}
