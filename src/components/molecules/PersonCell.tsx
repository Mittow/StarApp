import React from "react";
import { Link } from "react-router-dom";
import { PersonCellPropModel } from "../../models/personCellPropModel";
import { HomeworldService } from "../../services/homeworldService";
import { LoadingIndicator } from "../atoms/LoadingIndicator";
import { SpecieService } from "../../services/specieService";

export const PersonCell: React.FC<PersonCellPropModel> = ({ name, speciesURL, homeworldURL }) => {
  const { homeworld, isLoadingHomeWorld } = HomeworldService(homeworldURL);

  const speciesArray: string[] = [];
  let isLoadingSpecie = false;

  speciesURL?.forEach((element) => {
    const { specie, isLoadingSpecie: specieLoading } = SpecieService(element);
    specie && speciesArray.push(specie);
    isLoadingSpecie = isLoadingSpecie || specieLoading;
  });

  return (
    <Link
      to={`/${encodeURI(name)}`}
      className="cursor-pointer p-4 h-[69px] border-b border-[rgba(0,0,0,0.3)] flex flex-row justify-between items-center"
    >
      <div className="flex flex-col flex-1">
        <span className="font-bold text-[rgba(0,0,0,1)]">{name}</span>
        <div className="text-sm text-[rgba(0,0,0,0.5)]">
          {isLoadingHomeWorld ? (
            <LoadingIndicator size="9px" />
          ) : (
            <span>{homeworld || "Tatooine"}</span>
          )}
          <span> from </span>
          {isLoadingSpecie ? <LoadingIndicator size="9px" /> : <span>{speciesArray.length === 0 ? "Human" : speciesArray.join(", ")}</span>}
        </div>
      </div>
      <div>
        <span className="font-bold text-xl"> {">"} </span>
      </div>
    </Link>
  );
};