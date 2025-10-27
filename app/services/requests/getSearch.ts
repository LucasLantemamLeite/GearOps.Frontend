import { loadingHide, loadingShow } from "~/shared/Loading";
import { apiRequest } from "./api";
import { setNotification } from "~/shared/Notification";
import { Devices, Filter } from "~/shared/Devices";
import { getDevices } from "./getDevices";

export async function getSearch() {
  loadingShow();

  try {
    if (Filter.value === "") {
      await getDevices();
      return;
    }

    var result = await apiRequest(`/device-search/${Filter.value}`, "GET", 30);

    if (!result.data) {
      setNotification(`${result.message}`, 4, "Success");
      Devices.value = [];
      return;
    }

    Devices.value = result.data;
  } catch (err: unknown) {
    setNotification(String(err), 4, "Error");
  } finally {
    loadingHide();
  }
}
