import { instance } from "./base.api";

const endpoint = "species";

export const specieApi = {
  getAll: function(urlSpecie: (string | undefined)) {
    return instance.get(`${endpoint}/${urlSpecie}`);
  },
}