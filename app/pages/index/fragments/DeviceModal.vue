<template>
  <section @click="closeModal()" v-if="modelValue" class="flex fixed w-full h-full z-10 inset-0 flex-col items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px] md:p-12 md:pt-[6rem] md:shadow-md">
    <div @click="(e) => e.stopPropagation()" class="flex relative w-full h-full flex-col items-center gap-4 pt-[5rem] bg-white md:w-[40rem] md:h-auto md:rounded-[0.9rem]">
      <div @click="closeModal" class="flex absolute items-center justify-center top-3 right-8 p-2 border-2 border-[#272727] rounded-[0.9rem] lg:hover:bg-[#c9c9c9] lg:cursor-pointer lg:transition-all">
        <ImageComponent static-img="/Icons/CloseIcon.svg" alt-img="Close Icon" />
      </div>

      <DeviceForm :device="device" :close-modal="closeModal" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Device } from "~/types/Device";
import DeviceForm from "./DeviceForm.vue";

const props = defineProps<{
  modelValue: boolean;
  device: Device | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function closeModal() {
  emit("update:modelValue", false);
}

watch(
  () => props.modelValue,
  (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  },
  { immediate: true }
);
</script>
