import { Devices } from "~/global/Devices";
import { apiRequestAsync } from "../helpers/ApiService";
import { loadingHide, loadingShow } from "~/global/Loading";

export async function getDevicesService(take: number = 30, page: number = 1) {
  loadingShow();

  try {
    const result = await apiRequestAsync(`/device/${take}/${page}`, "GET", 15);

    Devices.value = result.data;
  } catch {
  } finally {
    loadingHide();
  }
}
