import { Devices } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { connection } from "../connectionHub";

export function createdConnect() {
  connection.on("DeviceCreated", (device: Device) => {
    Devices.value.push(device);
  });
}
