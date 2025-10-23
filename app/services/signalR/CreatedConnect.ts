import type { HubConnection } from "@microsoft/signalr";
import { Devices, orderByType } from "~/shared/Devices";
import type { Device } from "~/types/Device";

export function createdConnect(connection: HubConnection, take: number = 30) {
  connection.on("DeviceCreated", (device: Device) => {
    if (Devices.value.length < take) {
      Devices.value = [...Devices.value, device];
      orderByType();
    }
  });
}
