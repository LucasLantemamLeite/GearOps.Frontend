<template>
  <section @click="closeModal()" v-if="modelValue" class="flex fixed w-full h-full inset-0 z-10 flex-col items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px] md:p-12 md:top-1/2 md:left-1/2 md:pt-[6rem] md:-translate-x-1/2 md:-translate-y-1/2 md:shadow-md">
    <div @click="(e) => e.stopPropagation()" v-if="modelValue" class="flex relative w-full h-full flex-col items-center gap-4 pt-[5rem] bg-white md:w-[40rem] md:h-auto md:rounded-[0.9rem]">
      <div @click="closeModal" class="flex absolute items-center justify-center top-3 right-8 p-2 border-2 border-[#272727] rounded-[0.9rem] lg:hover:bg-[#c9c9c9] lg:cursor-pointer lg:transition-all">
        <ImageComponent static-img="/Icons/CloseIcon.svg" alt-img="Close Icon" />
      </div>

      <form @submit.prevent="(e) => device === null ? createDeviceService(e, closeModal) : updateDeviceService(e, device!.id, closeModal)" class="flex items-center flex-col w-[90%] gap-4">
        <DevicePreviewBlock :preview-device="preview" />

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
          <InputComponent :value="formateDateISOForInput(device?.start)" name="start" id="start" type="datetime-local" class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white" />
        </div>

        <div class="flex flex-col gap-1 w-full">
          <label for="return">Retorno:</label>
          <InputComponent :value="formateDateISOForInput(device?.return)" name="return" id="return" type="datetime-local" class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white" />
        </div>

        <div class="flex h-[5rem] justify-center items-center w-full gap-4 md:mb-4">
          <ButtonComponent type="submit" class="w-[70%] h-[80%] p-2 my-4 border-[#272727] border-2 rounded-[0.9rem] shadow-md active:shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all lg:hover:bg-[#c9c9c9] lg:cursor-pointer">{{
            device === null ? "Criar" : "Atualizar"
          }}</ButtonComponent>

          <div @click="deleteDeviceService(device.id, closeModal)" v-if="device" class="flex h-[80%] p-1 border-2 rounded-[0.9rem] border-[#272727] lg:hover:cursor-pointer lg:transition-all lg:hover:bg-[#c9c9c9]">
            <ImageComponent static-img="/Icons/TrashIcon.svg" alt-img="Trash Icon" class="w-[3rem]" />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Device } from "~/types/Device";
import DevicePreviewBlock from "./DevicePreviewBlock.vue";
import { DeviceType } from "~/types/DeviceType";
import { DeviceStatus } from "~/types/DeviceStatus";
import { createDeviceService } from "~/services/requests/CreateDeviceService";
import { updateDeviceService } from "~/services/requests/UpdateDeviceService";
import { deleteDeviceService } from "~/services/requests/DeleteDeviceService";

const props = defineProps<{
  modelValue: boolean;
  device: Device | null;
}>();

const preview = reactive({
  name: "",
  type: 1,
  status: 1,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

watch(
  () => props.modelValue,
  (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";

    if (isOpen) {
      preview.name = props.device?.name ?? "";
      preview.type = props.device?.type ?? 1;
      preview.status = props.device?.status ?? 1;
    }
  },
  { immediate: true }
);

function closeModal() {
  emit("update:modelValue", false);
}
</script>
