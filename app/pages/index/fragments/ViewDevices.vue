<template>
  <section v-if="Devices.length != 0" class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full h-auto items-center p-4 gap-4 mb-8 rounded-[0.9rem] border-2 border-[#272727] shadow-md md:mb-[7rem]">
    <div v-for="device in Devices" @click="openEdit(device)" class="flex relative w-full h-[20rem] items-center justify-center p-4 flex-col bg-[#272727] text-[white] text-[1.5rem] rounded-[0.9rem] lg:cursor-pointer shadow-md md:transition-all md:hover:translate-y-[3px]">
      <div :style="{ backgroundColor: getColorByStatus(device.status) }" class="flex absolute w-full h-[1rem] top-0 rounded-t-[0.5rem]"></div>

      <ImageComponent :static-img="`/Images/${getImageByType(device.type)}.png`" :alt-img="`${getImageByType(device.type)} Image`" class="w-[9rem] mb-10 md:w-[10rem]" />

      <hr class="absolute bottom-[5.5rem] h-1 w-[85%] bg-[#92929250] border-none rounded-[0.9rem]" />

      <p class="absolute bottom-4 p-2 text-center text-[1.4rem] border-2 rounded-[0.9rem]">{{ device.name }}</p>
    </div>
  </section>

  <DeviceModal :device="editForm.deviceEdit!" v-model="editForm.isEditing" />
</template>

<script setup lang="ts">
import { getDevices } from "~/services/requests/getDevices";
import { Devices } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { getColorByStatus, getImageByType } from "~/shared/Devices";
import { createdConnect } from "~/services/signalR/events/createdConnect";
import { updatedConnect } from "~/services/signalR/events/updatedConnect";
import { deletedConnect } from "~/services/signalR/events/deletedConnect";
import DeviceModal from "./DeviceModal.vue";

onMounted(async () => {
  getDevices();

  createdConnect();
  updatedConnect();
  deletedConnect();
});

const editForm = reactive({
  deviceEdit: {},
  isEditing: false,
} as { deviceEdit: Device; isEditing: boolean });

function openEdit(device: Device) {
  editForm.deviceEdit = device;
  editForm.isEditing = true;
}
</script>
