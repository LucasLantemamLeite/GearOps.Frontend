import { loadingHide, loadingShow } from "~/shared/Loading";
import { apiRequest } from "./api";
import { setNotification } from "~/shared/Notification";
import { Pages } from "~/shared/Devices";

export async function getPages(current?: number) {
  loadingShow();

  try {
    const pageToLoad = current ?? Pages.Current;

    const result = await apiRequest(`/device-pages/${Pages.Take}`, "GET", 30);

    if (result.pages) {
      Pages.Count = result.pages;
      Pages.Current = pageToLoad;
    }
  } catch (err: unknown) {
    setNotification(String(err), 5, "Error");
  } finally {
    loadingHide();
  }
}
