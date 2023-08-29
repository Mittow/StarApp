import { instance } from "./baseApi";

export const specieApi = {
  getAllSpecies: function(urlSpecie: (string | undefined)) {
    return instance.get(`${urlSpecie}`);
  },
}