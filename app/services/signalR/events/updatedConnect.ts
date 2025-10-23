import { Devices, orderByType } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { connection } from "../connectionHub";

export function updatedConnect() {
  connection.on("DeviceUpdated", (device: Device) => {
    const index = Devices.value.findIndex((x) => x.id == device.id);

    if (index !== -1) {
      Devices.value[index] = device;

      Devices.value = [...Devices.value];
    }

    orderByType();
  });
}
