import { Devices } from "~/global/Devices";
import { apiRequestAsync } from "../helpers/ApiService";
import { loadingHide, loadingShow } from "~/global/Loading";
import { setNotification } from "~/global/Notification";

export async function getDevicesService(take: number = 30, page: number = 1) {
  loadingShow();

  try {
    const result = await apiRequestAsync(`/device/${take}/${page}`, "GET", 15);

    setNotification(`${result.message}`, 5, "Success");

    if (result.data) Devices.value = result.data;
  } catch (err: any) {
    setNotification(String(err), 5, "Error");
  } finally {
    loadingHide();
  }
}
