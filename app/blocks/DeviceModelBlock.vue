<template>
  <section v-if="modelValue" class="flex flex-col items-center w-full gap-8 pt-[8rem] fixed inset-0 z-10 bg-white">
    <div @click="closeModal" class="flex absolute items-center justify-center top-8 right-8 p-2 border-2 border-[#272727] rounded-[0.9rem]">
      <ImageComponent static-img="/Icons/CloseIcon.svg" alt-img="Close Icon" />
    </div>

    <form action="" class="flex items-center flex-col w-[90%] gap-4">
      <DevicePreviewBlock :preview-device="preview" />

      <InputComponent v-model="preview.name" placeholder="Name..." class="w-full outline-none p-4 text-[1.4rem] border-2 border-[#272727] rounded-[0.9rem]" />

      <SelectComponent v-model="preview.type" :type="DeviceType" class="w-full outline-none p-4 text-[1.4rem] border-2 border-[#272727] rounded-[0.9rem]" />

      <SelectComponent v-model="preview.status" :type="DeviceStatus" class="w-full outline-none p-4 text-[1.4rem] border-2 border-[#272727] rounded-[0.9rem]" />

      <div class="flex w-full gap-4">
        <InputComponent type="date" placeholder="start" class="w-full outline-none p-4 text-[1.4rem] border-2 border-[#272727] rounded-[0.9rem]" />

        <InputComponent type="date" placeholder="return" class="w-full outline-none p-4 text-[1.4rem] border-2 border-[#272727] rounded-[0.9rem]" />
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import type { Device } from "~/types/Device";
import DevicePreviewBlock from "./DevicePreviewBlock.vue";
import { DeviceType } from "~/types/DeviceType";
import { DeviceStatus } from "~/types/DeviceStatus";

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
