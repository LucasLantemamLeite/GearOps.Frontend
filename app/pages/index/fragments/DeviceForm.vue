<template>
  <form @submit.prevent="(e) => device === null ? createDevice(e, closeModal) : updateDevice(e, device!.id, closeModal)" class="flex items-center flex-col w-[90%] gap-4">
    <DevicePreview :preview-device="preview" />

    <div class="flex flex-col gap-1 w-full">
      <label for="name">Nome:</label>
      <InputComponent max-lenght="20" name="name" id="name" v-model="preview.name" class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white" />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="type">Tipo:</label>
      <SelectComponent name="type" id="type" v-model="preview.type" :type="DeviceType" class="w-full text-[1.4rem] text-white outline-none p-4 border-none bg-[#272727] rounded-[0.9rem] shadow-md" />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="status">Status:</label>
      <SelectComponent name="status" id="status" v-model="preview.status" :type="DeviceStatus" class="w-full text-[1.4rem] text-white outline-none p-4 border-none bg-[#272727] rounded-[0.9rem] shadow-md" />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="start">Inicio:</label>
      <InputComponent :value="formateDateISO(device?.start)" name="start" id="start" type="datetime-local" class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white" />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="return">Retorno:</label>
      <InputComponent :value="formateDateISO(device?.return)" name="return" id="return" type="datetime-local" class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white" />
    </div>

    <div class="flex h-[5rem] justify-center items-center w-full gap-4 md:mb-4">
      <ButtonComponent type="submit" class="w-[70%] h-[80%] p-2 my-4 border-[#272727] border-2 rounded-[0.9rem] shadow-md active:shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all lg:hover:bg-[#c9c9c9] lg:cursor-pointer">{{
        device === null ? "Criar" : "Atualizar"
      }}</ButtonComponent>

      <div @click="deleteDevice(device.id, closeModal)" v-if="device" class="flex h-[80%] p-1 border-2 rounded-[0.9rem] border-[#272727] lg:hover:cursor-pointer lg:transition-all lg:hover:bg-[#c9c9c9]">
        <ImageComponent static-img="/Icons/TrashIcon.svg" alt-img="Trash Icon" class="w-[3rem]" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { Device } from "~/types/Device";
import DevicePreview from "./DevicePreview.vue";
import { DeviceType } from "../../../types/DeviceType";
import { DeviceStatus } from "../../../types/DeviceStatus";
import { deleteDevice } from "~/services/requests/deleteDevice";
import { createDevice } from "~/services/requests/createDevice";
import { updateDevice } from "~/services/requests/updateDevice";
import { formateDateISO } from "~/utils/forms/formateDateISO";

const preview = reactive({
  name: "",
  type: 1,
  status: 1,
});

const props = defineProps<{
  device: Device | null;
  closeModal: () => void;
}>();

watch(
  () => props.device,
  (device) => {
    preview.name = device?.name ?? "";
    preview.type = device?.type ?? 1;
    preview.status = device?.status ?? 1;
  },
  { immediate: true }
);
</script>
