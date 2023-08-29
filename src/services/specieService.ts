import React from 'react'
import { specieApi } from '../api/specieApi';

export const SpecieService = ( speciesURL: (string | undefined) ) => {
  const [specie, setSpecie] = React.useState<string|null>(null);
  const [error, setError] = React.useState<Error|unknown>(null);
  const [isLoadingSpecie, setIsLoadingSpecie] = React.useState<boolean>(false);

  React.useEffect(() => {
    getSpecieName(speciesURL);
  }, [speciesURL]);

  async function getSpecieName (speciesURL: string | undefined) {
    if (!speciesURL) return;
    setIsLoadingSpecie(true);
    try {
      const species = await specieApi.getAllSpecies(speciesURL);
      setSpecie(species.data?.name);
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setIsLoadingSpecie(false);
    }
  }

  return { specie, isLoadingSpecie, error };

}
