import type { Device } from "~/types/Device";

export const Devices = ref<Device[]>([]);

export function orderByType() {
  Devices.value = Devices.value.sort((a, b) => a.type - b.type);
}
