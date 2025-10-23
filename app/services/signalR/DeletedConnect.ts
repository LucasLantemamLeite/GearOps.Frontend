import type { HubConnection } from "@microsoft/signalr";
import { Devices, orderByType } from "~/global/Devices";
import type { Device } from "~/types/Device";

export function deletedConnect(connection: HubConnection) {
  connection.on("DeviceDeleted", (device: Device) => {
    Devices.value = [...Devices.value.filter((x) => x.id != device.id)];
    orderByType();
  });
}
