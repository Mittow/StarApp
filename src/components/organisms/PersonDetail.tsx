import React from 'react'
import { FeatureDetail } from '../molecules/FeatureDetail'
import { VehicleDetail } from '../molecules/VehicleDetail'
import { SectionTitle } from '../atoms/SectionTitle'

export const PersonDetail = () => {
  return (
    <section>
      {/* FEATURES */}
      <SectionTitle title='General Information' />
      <FeatureDetail feature='Eye Color' value='Blue' />
      <FeatureDetail feature='Hair Color' value='Blond' />
      <FeatureDetail feature='Skin Color' value='Fair' />
      <FeatureDetail feature='Birth Year' value='19BBY' />
      {/* VEHICLES */}
      <SectionTitle title='Vehicle' />
      <VehicleDetail vehicle='Snowpeeder' />
      <VehicleDetail vehicle='Imperial Speeder Bike' />
    </section>
  )
}
