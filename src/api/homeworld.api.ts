import { instance } from "./base.api";

const endpoint = "planets";

export const homeworldApi = {
  getAll: function(urlHomeworld: (string | undefined)) {
    return instance.get(`${endpoint}/${urlHomeworld}`);
  },
}