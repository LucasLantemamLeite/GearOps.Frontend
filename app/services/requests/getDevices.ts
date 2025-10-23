import { Devices } from "~/shared/Devices";
import { apiRequest } from "./api";
import { loadingHide, loadingShow } from "~/shared/Loading";
import { setNotification } from "~/shared/Notification";

export async function getDevices(take: number = 30, page: number = 1) {
  loadingShow();

  try {
    const result = await apiRequest(`/device/${take}/${page}`, "GET", 15);

    setNotification(`${result.message}`, 5, "Success");

    if (result.data) Devices.value = result.data;
  } catch (err: any) {
    setNotification(String(err), 5, "Error");
  } finally {
    loadingHide();
  }
}
