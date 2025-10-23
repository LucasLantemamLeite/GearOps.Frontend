import { loadingHide, loadingShow } from "~/global/Loading";
import { apiRequestAsync } from "../helpers/ApiService";
import { setNotification } from "~/global/Notification";

export async function createDeviceService(e: Event, closeModal: () => void) {
  e.preventDefault();

  loadingShow();

  const target = e.target as HTMLElement;
  const form = target.closest("form") as HTMLFormElement;

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const dto = {
    ...payload,
    type: Number(payload.type),
    status: Number(payload.status),
    start: payload.start ? new Date(payload.start + ":00").toISOString() : null,
    return: payload.return === "string" ? new Date(payload.return + ":00").toISOString() : null,
  };

  try {
    const result = await apiRequestAsync("/device", "POST", 30, dto);

    setNotification(`${result.message}`, 7, "Success");

    closeModal();
  } catch (err: unknown) {
    setNotification(String(err), 7, "Error");
  } finally {
    loadingHide();
  }
}
