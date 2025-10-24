<template>
  <section @click="closeModal()" v-if="modelValue" class="device_modal-background">
    <div @click="(e) => e.stopPropagation()" class="device_modal-box">
      <div @click="closeModal" class="device_modal-close-icon">
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

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

.device_modal {
  &-background {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
  }

  &-box {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding-top: 5rem;
    align-items: center;
    background-color: white;
  }

  &-close-icon {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 1rem;
    right: 2rem;
    padding: 0.5rem;
    border: Var.$default-border;
    border-radius: Var.$default-border-radius;
  }
}
</style>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

// Responsividade //

.device_modal {
  @media (min-width: 600px) {
    &-background {
      padding: 4rem;
      padding-top: 6rem;
      backdrop-filter: blur(3px);
      box-shadow: Var.$default-box-shadow;
      background-color: rgba(0, 0, 0, 0.4);
    }

    &-box {
      width: 40rem;
      height: auto;
      border-radius: Var.$default-border-radius;
    }
  }

  @media (min-width: 1024px) {
    &-close-icon {
      transition: all 100ms ease;
      cursor: pointer;

      &:hover {
        background-color: Var.$primary-hover-gray;
      }
    }
  }
}
</style>
