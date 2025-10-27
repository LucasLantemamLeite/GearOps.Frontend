import { Devices } from "~/shared/Devices";
import { apiRequest } from "./api";
import { loadingHide, loadingShow } from "~/shared/Loading";
import { setNotification } from "~/shared/Notification";

export async function getDevices() {
  loadingShow();

  try {
    const result = await apiRequest(`/device`, "GET", 30);

    if (!result.data) setNotification(`${result.message}`, 5, "Success");

    if (result.data) Devices.value = result.data;
  } catch (err: any) {
    setNotification(String(err), 5, "Error");
  } finally {
    loadingHide();
  }
}
