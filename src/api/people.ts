import { instance } from "./base.api";

const endpoint = "people";

export const people = {
  getAll: function() {
    return instance.get(endpoint);
  },
  getById: function ({ id } : { id: number }) {
    return instance.get(`${endpoint}/${id}`);
  }
}