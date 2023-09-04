import { FeatureDetail } from "../molecules/FeatureDetail";
import { SectionHeader } from "../atoms/SectionHeader";
import { useParams } from "react-router-dom";
import { PeopleService } from "../../services/peopleService";
import { VehicleDetail } from "../molecules/VehicleDetail";
import React from "react";

export const PersonDetail = React.memo(() => {
  const { slug } = useParams();
  const { getCharacterByName, characterDetail } = PeopleService();
  
  React.useEffect(() => {
    getCharacterByName(slug ?? '');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <section className={`p-4 w-full md:px-14 md:py-2 md:w-3/4`}>
      {/* FEATURES */}
      <SectionHeader title="General Information" />
      <FeatureDetail feature="Eye Color" value={characterDetail?.eye_color} />
      <FeatureDetail feature="Hair Color" value={characterDetail?.hair_color} />
      <FeatureDetail feature="Skin Color" value={characterDetail?.skin_color} />
      <FeatureDetail feature="Birth Year" value={characterDetail?.birth_year} />

      {/* VEHICLES */}
      <SectionHeader title="Vehicle" />
      {
        !Array.isArray(characterDetail?.vehicles) ? '' : characterDetail?.vehicles.map((vehicleURL, index) => (
          <VehicleDetail key={index} vehicleURL={vehicleURL} />
        ))
      }
    </section>
  );
});