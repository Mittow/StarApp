import React from "react";
import { PPersonCardModel } from "../../models/p.person.card.model";
import { homeworldApi } from "../../api/homeworld.api";

export const PersonCard: React.FC<PPersonCardModel> = ({
  name,
  speciesURL,
  homeworldURL
}) => {
  const [planet, setPlanet] = React.useState<PPersonCardModel>();
  const [specie, setSpecie] = React.useState<PPersonCardModel>();

  //! PLANETA 
  React.useEffect(() => {
    getEndpoint(homeworldURL)
      .then((endpoint) => getPlanetName(endpoint));

    speciesURL?.forEach((element) => {
      getEndpoint(element)
        .then((endpoint) => getSpecieName(endpoint));
    })
  }, [homeworldURL, speciesURL]);

  //* OBTENIENDO ID DE LA URL *//
  function getEndpoint (URL: string | undefined) {
    const endpoint = URL?.split('/').filter(Boolean).pop();
    return Promise.resolve(endpoint);
  }

  //* CONSUMIENDO API (PLANETS) *//
  function getPlanetName(endpoint: string | undefined) {
    if (!endpoint) return;
    homeworldApi
      .getAll(endpoint)
      .then((response) => {
        setPlanet(response.data?.name);
      })
  }

  //! ESPECIE
  //* CONSUMIENDO API (SPECIE) *//
  function getSpecieName(endpoint: string | undefined) {
    if (!endpoint) return;
    homeworldApi
      .getAll(endpoint)
      .then((response) => {
        setSpecie(response.data?.name);
      })
  }

  return (
    <div className="cursor-pointer p-4 h-[69px] border-b border-[rgba(0,0,0,0.3)] flex flex-row justify-between items-center">
      <div className="flex flex-col flex-1">
        <span className="font-bold text-[rgba(0,0,0,1)]">{name}</span>
        <span className="text-sm text-[rgba(0,0,0,0.5)]">
          {`${specie ?? 'Human' } from ${planet}`}
        </span>
      </div>
      <div>
        <span className="font-bold text-xl"> {">"} </span>
      </div>
    </div>
  );
};
