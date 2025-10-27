import { loadingHide, loadingShow } from "~/shared/Loading";
import { setNotification } from "~/shared/Notification";
import { apiRequest } from "./api";
import { Pages } from "~/shared/Pages";

export async function deleteDevice(id: string, closeModal: () => void) {
  if (!id) setNotification("Falha ao capturar o id do dispositivo.", 4, "Info");

  loadingShow();

  const dto = { id: id };

  try {
    const result = await apiRequest(`/device/${Pages.Take}`, "DELETE", 40, dto);

    setNotification(`${result.message}`, 4, "Success");

    closeModal();
  } catch (err: unknown) {
    setNotification(String(err), 4, "Error");
  } finally {
    loadingHide();
  }
}
