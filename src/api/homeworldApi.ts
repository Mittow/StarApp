import { instance } from "./baseApi";

export const homeworldApi = {
  getAllHomeworlds: function(urlHomeworld: (string | undefined)) {
    return instance.get(`${urlHomeworld}`);
  },
}