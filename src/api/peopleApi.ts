import { instance } from "./baseApi";

const endpoint = "people";

export const peopleApi = {
  getAll: function() {
    return instance.get(endpoint);
  },
  getByName: function(name: string) {
    return instance.get(`${endpoint}/?search=${name}`);
  }
}