import React from "react";
import { FeatureDetail } from "../molecules/FeatureDetail";
import { VehicleDetail } from "../molecules/VehicleDetail";
import { SectionTitle } from "../atoms/SectionTitle";
import { PeopleModel } from "../../models/people.model";

export const PersonDetail: React.FC<PeopleModel> = ({
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  vehicles,
  styles
}) => {

  return (
    <section className={`p-4 w-full md:px-14 md:py-2 md:w-3/4 !${styles}`}>
      {/* FEATURES */}
      <SectionTitle title="General Information" />
      <FeatureDetail feature="Eye Color" value={eye_color} />
      <FeatureDetail feature="Hair Color" value={hair_color} />
      <FeatureDetail feature="Skin Color" value={skin_color} />
      <FeatureDetail feature="Birth Year" value={birth_year} />
      {/* VEHICLES */}
      <SectionTitle title="Vehicle" />
      {
        !Array.isArray(vehicles) ? '' : vehicles.map((vehicleURL, index) => (
          <VehicleDetail key={index} vehicleURL={vehicleURL} />
        ))
      }
    </section>
  );
};