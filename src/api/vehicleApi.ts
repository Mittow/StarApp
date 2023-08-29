import { instance } from "./baseApi";

const endpoint = "vehicles";

export const vehicleApi = {
  getAllVehicles: function(urlVehicle: (string | undefined)) {
    return instance.get(`${endpoint}/${urlVehicle}`);
  },
}