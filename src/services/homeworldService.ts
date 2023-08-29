import React from "react";
import { homeworldApi } from "../api/homeworldApi";

export const HomeworldService = (homeworldsURL: string | undefined) => {
  const [homeworld, setHomeworld] = React.useState<string | null>(null);
  const [error, setError] = React.useState<Error | unknown>(null);
  const [isLoadingHomeWorld, setIsLoadingHomeWorld] = React.useState<boolean>(false);

  React.useEffect(() => {
    getPlanetName(homeworldsURL);
  }, [homeworldsURL]);

  async function getPlanetName(homeworldsURL: string | undefined) {
    if (!homeworldsURL) return;
    setIsLoadingHomeWorld(true);
    try {
      const planets = await homeworldApi.getAllHomeworlds(homeworldsURL);
      setHomeworld(planets.data?.name);
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setIsLoadingHomeWorld(false);
    }
  }

  return { homeworld, isLoadingHomeWorld, error };
};
