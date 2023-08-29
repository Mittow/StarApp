import { useEffect, useState } from 'react';
import { PeopleModel } from '../models/peopleModel';
import { peopleApi } from '../api/peopleApi';

export const PeopleService = () => {
  const [allPeople, setAllPeople] = useState<PeopleModel[] | null>(null);
  const [nextPage, setNextPage] = useState<string>('');
  const [error, setError] = useState<Error | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async () => {
    setIsLoading(true);
    try {
      const response = await peopleApi.getAll();
      const result = response.data.results;
      setAllPeople(result);
      setNextPage(response.data.next);
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getCharacterByName = async (name: string) => {
    setIsLoading(true);
    try {
      const response = await peopleApi.getByName(name);
      const result = response.data.results[0];
      return result;
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchNextPage = async () => {
    if (nextPage) {
      setIsLoading(true);
      try {
        const response = await fetch(nextPage);
        const data = await response.json();
        setAllPeople((prevData) => [
          ...(prevData as PeopleModel[]),
          ...data.results,
        ]);
        setNextPage(data.next);
      } catch (e) {
        console.log(e);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { allPeople, nextPage, fetchNextPage, getCharacterByName, error, isLoading };
};