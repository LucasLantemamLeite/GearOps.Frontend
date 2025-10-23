<template>
  <section v-if="Devices.length != 0" class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] w-full h-auto items-center p-4 gap-4 mb-8 rounded-[0.9rem] border-2 border-[#272727] shadow-md md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:mb-[7rem]">
    <div v-for="device in Devices" @click="openEdit(device)" class="flex relative w-full h-[22rem] items-center gap-4 flex-col bg-[#272727] text-[white] text-[1.5rem] rounded-[0.9rem] md:h-[25rem] shadow-md lg:cursor-pointer lg:transition-all lg:hover:translate-y-[3px]">
      <div :style="{ backgroundColor: getColorByStatus(device.status) }" class="flex absolute w-full h-[1rem] top-0 rounded-t-[0.5rem]"></div>

      <p class="p-2 mt-8 mb-2 text-center text-[1.4rem] border-2 rounded-[0.9rem] md:text-[1.6rem]">{{ device.name }}</p>

      <ImageComponent :static-img="`/Images/${getImageByType(device.type)}.png`" :alt-img="`${getImageByType(device.type)} Image`" class="mb-2 w-[8rem] md:w-[10rem]" />

      <div v-if="device.status === 3" class="flex w-[70%] items-center flex-col gap-2">
        <div class="flex items-center w-full justify-between gap-2">
          <ImageComponent static-img="/Icons/StartIcon.svg" class="w-[2rem]" />
          <p class="text-white text-[1.2rem] md:text-[1.6rem]">{{ device.start ? formateDateISO(device.start, true) : "Não definido" }}</p>
        </div>

        <hr class="h-[0.2rem] w-[120%] bg-[#92929250] border-none rounded-[0.9rem]" />

        <div class="flex items-center w-full justify-between gap-2">
          <ImageComponent static-img="/Icons/ReturnIcon.svg" class="w-[2rem]" />
          <p class="text-white text-[1.2rem] md:text-[1.6rem]">{{ device.return ? formateDateISO(device.return, true) : "Não definido" }}</p>
        </div>
      </div>
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
import { formateDateISO } from "~/utils/dates/formateDateISO";

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
