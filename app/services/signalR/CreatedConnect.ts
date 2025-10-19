import type { HubConnection } from "@microsoft/signalr";
import { Devices } from "~/global/Devices";
import type { Device } from "~/types/Device";

export function createdConnect(connection: HubConnection) {
  connection.on("DeviceCreated", (device: Device) => {
    Devices.value = [...Devices.value, device];
  });
}
