import { instance } from "./base.api";

const endpoint = "people";

export const peopleApi = {
  getAll: function() {
    return instance.get(endpoint);
  },
}