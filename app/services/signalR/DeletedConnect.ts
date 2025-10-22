import type { HubConnection } from "@microsoft/signalr";
import { Devices, orderByType } from "~/global/Devices";
import type { Device } from "~/types/Device";
import { getDevicesService } from "../requests/GetDevicesService";

export function deletedConnect(connection: HubConnection, take: number = 30, page: number = 1) {
  connection.on("DeviceDeleted", (device: Device) => {
    Devices.value = [...Devices.value.filter((x) => x.id != device.id)];
    getDevicesService(take, page);
    orderByType();
  });
}
