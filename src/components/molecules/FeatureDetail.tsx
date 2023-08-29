import React from 'react'
import { FeatureDetailPropModel } from '../../models/featureDetailPropModel'
import { LoadingIndicator } from '../atoms/LoadingIndicator'

export const FeatureDetail: React.FC<FeatureDetailPropModel> = ({ feature, value }) => {
  return (
    <div className='h-[49px] border-b border-[rgba(0,0,0,0.3)] flex flex-row justify-between items-center'>
      <span className='font-bold text-[rgba(0,0,0,0.5)] flex-auto'>{ feature ?? <LoadingIndicator /> }</span>
      <span className='font-bold text-[rgba(0,0,0,1)]'>{ value ?? <LoadingIndicator /> }</span>
    </div>
  )
}
