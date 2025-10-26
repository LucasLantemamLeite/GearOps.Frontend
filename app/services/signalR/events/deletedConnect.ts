import { Devices } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { connection } from "../connectionHub";

export function deletedConnect() {
  connection.on("DeviceDeleted", (device: Device) => {
    Devices.value = [...Devices.value.filter((x) => x.id != device.id)];
  });
}
