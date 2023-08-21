import { instance } from "./base.api";

const endpoint = "vehicles";

export const vehicleApi = {
  getAll: function(urlVehicle: (string | undefined)) {
    return instance.get(`${endpoint}/${urlVehicle}`);
  },
}