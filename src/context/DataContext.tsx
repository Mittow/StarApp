import React, { PropsWithChildren, useContext } from "react";
import { PeopleService } from "../services/peopleService";
import { PeopleDataModel } from "../models/peopleDataModel";

const DataContext = React.createContext({});

function DataProvider({ children }: PropsWithChildren) {
  const { allPeople, isLoading, error, nextPage, fetchNextPage } = PeopleService();

  const data = { allPeople, isLoading, error, nextPage, fetchNextPage };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

function useData() {
  const dataContext = useContext(DataContext) as PeopleDataModel;
  return dataContext;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DataProvider, useData };
