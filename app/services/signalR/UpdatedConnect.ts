import type { HubConnection } from "@microsoft/signalr";
import { Devices } from "~/global/Devices";
import type { Device } from "~/types/Device";

export function updatedConnect(connection: HubConnection) {
  connection.on("DeviceUpdated", (device: Device) => {
    const index = Devices.value.findIndex((x) => x.id == device.id);

    if (index !== -1) {
      Devices.value[index] = device;

      Devices.value = [...Devices.value];
    }
  });
}
