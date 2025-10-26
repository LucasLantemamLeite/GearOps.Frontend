import { Devices, Pages } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { connection } from "../connectionHub";

export function createdConnect() {
  connection.on("DeviceCreated", (data: { device: Device; pages: number; take: number }) => {
    if (Devices.value.length < Pages.Take) Devices.value = [...Devices.value, data.device];

    if (data.pages !== 0 && data.take == Pages.Take) Pages.Count = data.pages;
  });
}
