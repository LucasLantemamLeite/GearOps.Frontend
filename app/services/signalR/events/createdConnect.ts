import { Devices } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { connection } from "../connectionHub";

export function createdConnect(take: number = 30) {
  connection.on("DeviceCreated", (device: Device) => {
    if (Devices.value.length < take) {
      Devices.value = [...Devices.value, device];
    }
  });
}
