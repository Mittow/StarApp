import { PeopleModel } from "./peopleModel";

export interface PeopleDataModel {
  allPeople: PeopleModel[] | null;
  isLoading: boolean;
  error: boolean | null;
  nextPage?: string;
  fetchNextPage?: () => void;
  characterDetail: PeopleModel;
}