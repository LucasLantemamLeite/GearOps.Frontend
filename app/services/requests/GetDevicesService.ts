import { GlobalDevices } from "~/global/Devices";
import { apiRequestAsync } from "../helpers/ApiService";

export async function getDevicesService(take: number = 30, page: number = 1) {
  try {
    const result = await apiRequestAsync(`/device/${take}/${page}`, "GET", 15);

    GlobalDevices.value = result.data;
  } catch {}
}
