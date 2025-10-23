import { loadingHide, loadingShow } from "~/shared/Loading";
import { setNotification } from "~/shared/Notification";
import { apiRequestAsync } from "../base/ApiService";

export async function updateDeviceService(e: Event, id: string, closeModel: () => void) {
  if (!id) setNotification("Falha ao capturar o id do dispositivo.", 7, "Info");

  e.preventDefault();

  loadingShow();

  const target = e.target as HTMLElement;
  const form = target.closest("form") as HTMLFormElement;

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  payload.id = id;

  const dto = {
    ...payload,
    type: Number(payload.type),
    status: Number(payload.status),
    start: payload.start ? new Date(payload.start + ":00").toISOString() : null,
    return: payload.return ? new Date(payload.return + ":00").toISOString() : null,
  };

  try {
    const result = await apiRequestAsync("/device", "PUT", 30, dto);

    setNotification(`${result.message}`, 7, "Success");

    closeModel();
  } catch (err: unknown) {
    setNotification(String(err), 7, "Error");
  } finally {
    loadingHide();
  }
}
