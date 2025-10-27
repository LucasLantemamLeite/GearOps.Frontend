import { loadingHide, loadingShow } from "~/shared/Loading";
import { setNotification } from "~/shared/Notification";
import { apiRequest } from "./api";

export async function updateDevice(e: Event, id: string, closeModel: () => void) {
  if (!id) setNotification("Falha ao capturar o id do dispositivo.", 7, "Info");

  e.preventDefault();

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

  if (!payload.name) {
    setNotification("O nome do dispositivo é obrigatório.", 4, "Error");
    return;
  }

  if (dto.start && dto.return) {
    if (dto.start > dto.return) {
      setNotification("Data de retorno da manutenção não pode ser menor do que a data de inicio.", 4, "Attention");
      return;
    }
  }

  loadingShow();

  try {
    const result = await apiRequest("/device", "PUT", 30, dto);

    if (dto.start && !dto.return) {
      setNotification(`${result.message} Porém só foi definido data de inicio da manutenção.`, 4, "Info");
    } else if (!dto.start && dto.return) {
      setNotification(`${result.message} Porém só foi definido a data de retorno da manutenção.`, 4, "Info");
    } else setNotification(`${result.message}`, 4, "Success");

    closeModel();
  } catch (err: unknown) {
    setNotification(String(err), 4, "Error");
  } finally {
    loadingHide();
  }
}
