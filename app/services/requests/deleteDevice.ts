import { loadingHide, loadingShow } from "~/shared/Loading";
import { setNotification } from "~/shared/Notification";
import { apiRequest } from "./api";

export async function deleteDevice(id: string, closeModal: () => void) {
  if (!id) setNotification("Falha ao capturar o id do dispositivo.", 7, "Info");

  console.log(id);

  loadingShow();

  const dto = { id: id };

  try {
    const result = await apiRequest("/device", "DELETE", 30, dto);

    setNotification(`${result.message}`, 7, "Success");

    closeModal();
  } catch (err: unknown) {
    setNotification(String(err), 7, "Error");
  } finally {
    loadingHide();
  }
}
