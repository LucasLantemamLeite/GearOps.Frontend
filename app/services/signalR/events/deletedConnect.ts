import { Devices } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { connection } from "../connectionHub";
import { getPages } from "~/services/requests/getPages";
import { Pages } from "~/shared/Pages";

export function deletedConnect() {
  connection.on("DeviceDeleted", (data: { existingDevice: Device; pages: number; take: number }) => {
    Devices.value = Devices.value.filter((x) => x.id !== data.existingDevice.id);

    if (data.pages !== 0 && data.take == Pages.Take) Pages.Count = data.pages;

    if (Pages.Current > data.pages) getPages(data.pages);
  });
}
