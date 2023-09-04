import React from 'react';
import { PeopleModel } from '../models/peopleModel';
import { peopleApi } from '../api/peopleApi';
import { useParams } from 'react-router-dom';

export const PeopleService = () => {
  const { slug } = useParams();

  const [allPeople, setAllPeople] = React.useState<PeopleModel[] | null>(null);
  const [characterDetail, setCharacterDetail] = React.useState<PeopleModel | null>(null);
  const [nextPage, setNextPage] = React.useState<string>('');
  const [error, setError] = React.useState<Error | unknown>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getPeople();
  }, []);

  React.useEffect(() => {
    slug && getCharacterByName(slug ?? '');
  }, [slug]);

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
      setCharacterDetail(result);
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

  return { allPeople, nextPage, fetchNextPage, getCharacterByName, characterDetail, error, isLoading };
};