import PullToRefresh from "react-pull-to-refresh";
import React from "react";

import { PersonCell } from "../molecules/PersonCell";
import { LoadingCell } from "../molecules/LoadingCell";
import { NoticeCell } from "../atoms/NoticeCell";
import { useData } from "../../context/DataContext";

export const PeopleList = React.memo(() => {
  const { allPeople, isLoading, error, nextPage, fetchNextPage } = useData();

  // FUNCION PARA MANEJAR LA ACCION DE "PULL-TO-REFRESH"
  const handleRefresh = async () => {
    allPeople;
  };

  return (
    <aside
      className={`w-full flex flex-col md:w-1/4 md:border-r border-[rgba(0,0,0,0.3)]`}
    >
      {error ? (
        <PullToRefresh onRefresh={handleRefresh}>
          <NoticeCell />
        </PullToRefresh>
      ) : (
        <>
          {allPeople &&
            allPeople.map((character, index) => (
              <PersonCell
                key={index}
                name={character.name}
                homeworldURL={character.homeworld}
                speciesURL={character.species}
              />
            ))}

          {isLoading && <LoadingCell />}

          {!isLoading && nextPage && (
            <button
              className="h-[69px] flex justify-center items-center"
              onClick={fetchNextPage}
            >
              Cargar más...
            </button>
          )}
        </>
      )}
    </aside>
  );
});
