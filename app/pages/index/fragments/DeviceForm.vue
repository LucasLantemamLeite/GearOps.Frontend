<template>
  <form @submit.prevent="(e) => (device === null ? createDevice(e, closeModal) : updateDevice(e, localDevice.id, closeModal))" class="device_form-background">
    <DevicePreview :preview-device="localDevice" />

    <div class="device_form-div-label">
      <label for="name">Nome:</label>
      <InputComponent :max-length="'20'" name="name" id="name" v-model="localDevice.name" />
    </div>

    <div class="device_form-div-label">
      <label for="type">Tipo:</label>
      <SelectComponent name="type" id="type" v-model="localDevice.type" :type="DeviceType" />
    </div>

    <div class="device_form-div-label">
      <label for="status">Status:</label>
      <SelectComponent name="status" id="status" v-model="localDevice.status" :type="DeviceStatus" />
    </div>

    <div class="device_form-div-label">
      <label for="start">Início:</label>
      <InputComponent
        :style="localDevice.status !== 3 ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: text; opacity: 1;'"
        :value="formateDateISO(localDevice.start)"
        :disabled="localDevice.status !== 3"
        name="start"
        id="start"
        type="datetime-local"
        @input="(e: Event) => localDevice.start = (e.target as HTMLInputElement).value"
      />
    </div>

    <div class="device_form-div-label">
      <label for="return">Retorno:</label>
      <InputComponent
        :style="localDevice.status !== 3 ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: text; opacity: 1;'"
        :value="formateDateISO(localDevice.return, false)"
        :disabled="localDevice.status !== 3"
        name="return"
        id="return"
        type="datetime-local"
        @input="(e: Event) => localDevice.return = (e.target as HTMLInputElement).value"
      />
    </div>

    <div class="device_form-control-container">
      <ButtonComponent type="submit">
        {{ device === null ? "Criar" : "Atualizar" }}
      </ButtonComponent>

      <div @click="excludeOpen = true" v-if="device" class="device_form-exclude">
        <ImageComponent static-img="/Icons/TrashIcon.svg" alt-img="Trash Icon" />
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

const excludeOpen = ref(false);

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
</script>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

@mixin data-field {
  width: 100%;
  font-size: 1.4rem;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: Var.$default-border-radius;
  box-shadow: Var.$default-box-shadow;
  background-color: Var.$primary-dark-color;
  outline: none;
}

.device_form {
  &-background {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    max-width: 35rem;
    align-items: center;
  }

  &-div-label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;

    & input {
      @include data-field();

      &::selection {
        color: Var.$primary-dark-color;
        background-color: white;
      }
    }

    & select {
      @include data-field();
    }
  }

  &-control-container {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 5rem;
    justify-content: center;
    align-items: center;

    & button {
      padding: 0.5rem;
      margin: 2rem 0 2rem 0;
      width: 70%;
      height: 80%;
      border: Var.$default-border;
      border-radius: Var.$default-border-radius;
      box-shadow: Var.$default-box-shadow;
      cursor: default;
    }
  }

  &-exclude {
    display: flex;
    height: 80%;
    padding: 0.25rem;
    border: Var.$default-border;
    border-radius: Var.$default-border-radius;

    & img {
      width: 3rem;
    }
  }
}
</style>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

// Responsividade //

.device_form {
  @media (min-width: 600px) {
    &-control-container {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1024px) {
    &-control-container button {
      transition: all 100ms ease-in;

      &:hover {
        background-color: Var.$primary-hover-gray;
        cursor: pointer;
      }

      &:active {
        box-shadow: 0.1rem 0.1rem 0.1rem Var.$primary-dark-color;
        transform: translate(2px, 2px);
      }
    }

    &-exclude {
      transition: all 100ms ease;
      cursor: pointer;

      &:hover {
        background-color: Var.$primary-hover-gray;
      }
    }
  }
}
</style>
