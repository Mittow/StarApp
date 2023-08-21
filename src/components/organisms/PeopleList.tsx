import React from "react";
import PullToRefresh from "react-pull-to-refresh";

import { PersonCard } from "../molecules/PersonCard";
import { Loading } from "../molecules/Loading";
import { PeopleModel } from "../../models/people.model";
import { peopleApi } from "../../api/people.api";
import { Failed } from "../atoms/Failed";

interface SelectCard {
  onSelectCard: (r: PeopleModel) => void;
  styles?: string;
}

export const PeopleList: React.FC<SelectCard> = ({ onSelectCard, styles }) => {
  let contenido;

  const [allPeople, setAllPeople] = React.useState<PeopleModel[] | null>(null);
  const [nextPageUrl, setNextPageUrl] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isLoading1, setIsLoading1] = React.useState(false);
  const [isLoading2, setIsLoading2] = React.useState(false);

  //* CARGANDO DATOS *//
  React.useEffect(() => {
    getPeople();
  }, []);

  //* CONSUMIENDO API *//
  function getPeople() {
    setIsLoading1(true);
    peopleApi
      .getAll()
      .then((r) => {
        const result = r.data.results;
        setAllPeople(result);
        setNextPageUrl(r.data.next);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => {
        setIsLoading1(false);
      });
  }

  //* FUNCION PARA MANEJAR LA ACCION DE "PULL-TO-REFRESH" *//
  const handleRefresh = async () => {
    getPeople();
  };

  if (error) {
    contenido = (
      <PullToRefresh onRefresh={handleRefresh}>
        <Failed />
      </PullToRefresh>
    );
  } else if (isLoading1) {
    contenido = <Loading />;
  } else {
    contenido = allPeople?.map((r, index) => (
      <div key={index} onClick={() => onSelectCard(r)}>
        <PersonCard
          name={r.name}
          speciesURL={r.species}
          homeworldURL={r.homeworld}
        />
      </div>
    ));
  }

  const handleLoadMore = async () => {
    if (nextPageUrl) {
      setIsLoading2(true);
      const response = await fetch(nextPageUrl);
      const data = await response.json();

      // Actualizar los datos existentes con los nuevos datos
      // Asumiendo que los datos se almacenan en un estado llamado "cardsData"
      setAllPeople((prevData) => [
        ...(prevData as PeopleModel[]),
        ...data.results,
      ]);
      // Actualizar la URL de la siguiente página
      setNextPageUrl(data.next);
      setIsLoading2(false);
    }
  };

  return (
    <aside className={`w-full flex flex-col md:w-1/4 md:border-r border-[rgba(0,0,0,0.3)] !${styles}`}>
      {contenido}
      {!allPeople ? (
        ""
      ) : isLoading2 ? (
        <Loading />
      ) : (
        <button
          className="h-[69px] flex justify-center items-center"
          onClick={handleLoadMore}
        >
          Más...
        </button>
      )}
    </aside>
  );
};
