import { Devices, Filter } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { connection } from "../connectionHub";

export function createdConnect() {
  connection.on("DeviceCreated", (device: Device) => {
    if (Filter.value !== "" && device.name.toLowerCase().includes(Filter.value.toLowerCase())) {
      Devices.value = [...Devices.value, device];
    } else if (Filter.value === "") Devices.value = [...Devices.value, device];
  });
}
