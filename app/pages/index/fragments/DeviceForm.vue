<template>
  <form @submit.prevent="(e) => (device === null ? createDevice(e, closeModal) : updateDevice(e, localDevice.id, closeModal))" class="flex max-w-[35rem] flex-col w-[90%] gap-4 items-center">
    <DevicePreview :preview-device="localDevice" />

    <div class="flex flex-col gap-1 w-full">
      <label for="name">Nome:</label>
      <InputComponent max-lenght="20" name="name" id="name" v-model="localDevice.name" class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white" />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="type">Tipo:</label>
      <SelectComponent name="type" id="type" v-model="localDevice.type" :type="DeviceType" class="w-full text-[1.4rem] text-white outline-none p-4 border-none bg-[#272727] rounded-[0.9rem] shadow-md" />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="status">Status:</label>
      <SelectComponent name="status" id="status" v-model="localDevice.status" :type="DeviceStatus" class="w-full text-[1.4rem] text-white outline-none p-4 border-none bg-[#272727] rounded-[0.9rem] shadow-md" />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="start">Início:</label>
      <InputComponent
        :style="localDevice.status !== 3 ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: text; opacity: 1;'"
        :value="formateDateISO(localDevice.start)"
        :disabled="localDevice.status !== 3"
        name="start"
        id="start"
        type="datetime-local"
        @input="(e: Event) => localDevice.start = (e.target as HTMLInputElement).value"
        class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white"
      />
    </div>

    <div class="flex flex-col gap-1 w-full">
      <label for="return">Retorno:</label>
      <InputComponent
        :style="localDevice.status !== 3 ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: text; opacity: 1;'"
        :value="formateDateISO(localDevice.return, false)"
        :disabled="localDevice.status !== 3"
        name="return"
        id="return"
        type="datetime-local"
        @input="(e: Event) => localDevice.return = (e.target as HTMLInputElement).value"
        class="w-full text-[1.4rem] border-none text-white bg-[#272727] outline-none p-4 rounded-[0.9rem] shadow-md selection:text-[#272727] selection:bg-white"
      />
    </div>

    <div class="flex h-[5rem] justify-center items-center w-full gap-4 md:mb-4">
      <ButtonComponent type="submit" class="w-[70%] h-[80%] cursor-default p-2 my-4 border-[#272727] border-2 rounded-[0.9rem] shadow-md active:shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all lg:hover:bg-[#c9c9c9] lg:cursor-pointer">
        {{ device === null ? "Criar" : "Atualizar" }}
      </ButtonComponent>

      <div @click="excludeOpen = true" v-if="device" class="flex h-[80%] p-1 border-2 rounded-[0.9rem] border-[#272727] lg:hover:cursor-pointer lg:transition-all lg:hover:bg-[#c9c9c9]">
        <ImageComponent static-img="/Icons/TrashIcon.svg" alt-img="Trash Icon" class="w-[3rem]" />
      </div>
    </div>
  </form>

  <ConfirmExclude v-if="device" v-model="excludeOpen" :id="device.id" :name="device.name" :close-modal="closeModal" />
</template>

<script setup lang="ts">
import type { Device } from "~/types/Device";
import DevicePreview from "./DevicePreview.vue";
import { DeviceType } from "../../../types/DeviceType";
import { DeviceStatus } from "../../../types/DeviceStatus";
import { createDevice } from "~/services/requests/createDevice";
import { updateDevice } from "~/services/requests/updateDevice";
import { formateDateISO } from "~/utils/dates/formateDateISO";
import { reactive, watch } from "vue";
import ConfirmExclude from "./ConfirmExclude.vue";

const props = defineProps<{
  device: Device | null;
  closeModal: () => void;
}>();

const localDevice = reactive<Device>({
  ...(props.device ?? ({} as Device)),
  start: props.device?.start ?? "",
  return: props.device?.return ?? "",
});

watch(
  () => props.device,
  (device) => {
    localDevice.name = device?.name ?? "";
    localDevice.type = device?.type ?? 1;
    localDevice.status = device?.status ?? 1;
    localDevice.start = device?.start ?? "";
    localDevice.return = device?.return ?? "";
  },
  { immediate: true }
);

watch(
  () => localDevice.status,
  (status) => {
    if (!localDevice) return;

    if (status === 3) {
      localDevice.start = props.device?.start;
      localDevice.return = props.device?.return;
    }

    if (status === 1 || status === 2) {
      localDevice.start = "";
      localDevice.return = "";
    }
  },
  { immediate: true }
);

const excludeOpen = ref(false);
</script>
