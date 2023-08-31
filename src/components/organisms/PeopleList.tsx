import PullToRefresh from "react-pull-to-refresh";
import React from "react";

import { PersonCell } from "../molecules/PersonCell";
import { LoadingCell } from "../molecules/LoadingCell";
import { NoticeCell } from "../atoms/NoticeCell";
import { PeopleService } from "../../services/peopleService";

export const PeopleList = () => {
  const peopleService = PeopleService();

  // FUNCION PARA MANEJAR LA ACCION DE "PULL-TO-REFRESH"
  const handleRefresh = async () => {
    peopleService.allPeople;
  };

  React.useEffect(() => {
    peopleService.allPeople;
  }, [peopleService.allPeople]);

  return (
    <aside
      className={`w-full flex flex-col md:w-1/4 md:border-r border-[rgba(0,0,0,0.3)]`}
    >
      {peopleService.error ? (
        <PullToRefresh onRefresh={handleRefresh}>
          <NoticeCell />
        </PullToRefresh>
      ) : (
        <>
          {peopleService.allPeople && peopleService.allPeople.map((character, index) => (
            <PersonCell
              key={index}
              name={character.name}
              homeworldURL={character.homeworld}
              speciesURL={character.species}
            />
          ))}

          {peopleService.isLoading && <LoadingCell />}
          
          {!peopleService.isLoading && peopleService.nextPage && (
            <button
              className="h-[69px] flex justify-center items-center"
              onClick={peopleService.fetchNextPage}
            >
              Cargar más...
            </button>
          )}
        </>
      )}
    </aside>
  );
};