import { Devices } from "~/shared/Devices";
import { apiRequest } from "./api";
import { loadingHide, loadingShow } from "~/shared/Loading";
import { setNotification } from "~/shared/Notification";
import { Pages } from "~/shared/Pages";

export async function getDevices(page: number = 1) {
  loadingShow();

  try {
    const result = await apiRequest(`/device/${Pages.Take}/${page}`, "GET", 15);

    if (!result.data) setNotification(`${result.message}`, 5, "Success");

    if (result.data) Devices.value = result.data;
  } catch (err: any) {
    setNotification(String(err), 5, "Error");
  } finally {
    loadingHide();
  }
}
