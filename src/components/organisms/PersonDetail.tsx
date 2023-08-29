import { FeatureDetail } from "../molecules/FeatureDetail";
import { SectionHeader } from "../atoms/SectionHeader";
import { useParams } from "react-router-dom";
import { PeopleService } from "../../services/peopleService";
import { VehicleDetail } from "../molecules/VehicleDetail";
import { PeopleModel } from "../../models/peopleModel";
import React from "react";

export const PersonDetail = () => {

  const [response, setResponse] = React.useState<PeopleModel | null>(null);
  const peopleService = PeopleService();

  const { slug } = useParams();
  
  React.useEffect(() => {
    peopleService.getCharacterByName(slug ?? '').then((res) => {
      setResponse(res);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <section className={`p-4 w-full md:px-14 md:py-2 md:w-3/4`}>
      {/* FEATURES */}
      <SectionHeader title="General Information" />
      <FeatureDetail feature="Eye Color" value={response?.eye_color} />
      <FeatureDetail feature="Hair Color" value={response?.hair_color} />
      <FeatureDetail feature="Skin Color" value={response?.skin_color} />
      <FeatureDetail feature="Birth Year" value={response?.birth_year} />

      {/* VEHICLES */}
      <SectionHeader title="Vehicle" />
      {
        !Array.isArray(response?.vehicles) ? '' : response?.vehicles.map((vehicleURL, index) => (
          <VehicleDetail key={index} vehicleURL={vehicleURL} />
        ))
      }
    </section>
  );
};