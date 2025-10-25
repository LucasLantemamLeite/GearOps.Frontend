<template>
  <div class="device_preview-box">
    <div :style="{ backgroundColor: getColorByStatus(previewDevice.status) }" class="device_preview-status"></div>

    <p class="device_preview-name">{{ previewDevice.name || "Nome da máquina" }}</p>

    <ImageComponent :static-img="`/Images/${getImageByType(previewDevice.type)}.png`" :alt-img="`${getImageByType(previewDevice!.type)} Image`" class="device_preview-type" />

    <div v-if="previewDevice.status === 3" class="device_preview-dates-container">
      <div>
        <ImageComponent static-img="/Icons/StartIcon.svg" />
        <p>{{ previewDevice.start ? formateDateISO(previewDevice.start, true) : "Não definido" }}</p>
      </div>

      <div class="flex items-center w-full justify-between gap-2">
        <ImageComponent static-img="/Icons/ReturnIcon.svg" />
        <p>{{ previewDevice.return ? formateDateISO(previewDevice.return, true) : "Não definido" }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formateDateISO } from "~/utils/dates/formateDateISO";
import { getColorByStatus, getImageByType } from "~/shared/Devices";

defineProps<{
  previewDevice: { name: string; type: number; status: number; start?: string | Date | null; return?: string | Date | null };
}>();
</script>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

.device_preview {
  &-box {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    margin-bottom: 0.5rem;
    width: 80%;
    height: 22rem;
    color: white;
    font-size: 1.4rem;
    align-items: center;
    background-color: Var.$primary-dark-color;
    border-radius: Var.$default-border-radius;
    box-shadow: Var.$default-box-shadow;
  }

  &-status {
    position: absolute;
    display: flex;
    width: 100%;
    height: 1rem;
    top: 0;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &-name {
    padding: 0.5rem;
    font-size: 1.4rem;
    border: 2px solid white;
    border-radius: Var.$default-border-radius;
  }

  &-type {
    width: 9rem;
  }

  &-dates-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    & div {
      display: flex;
      gap: 2rem;
      align-items: center;
      width: 100%;
      justify-content: center;

      & img {
        width: 2rem;
      }

      & p {
        font-size: 1.2rem;
        color: white;
      }
    }
  }
}
</style>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

// Responsividade //

.device_preview {
  @media (min-width: 600px) {
    &-box {
      height: 24rem;
    }

    &-name {
      font-size: 1.6rem;
    }

    &-type {
      width: 10rem;
    }

    &-dates-container div p {
      font-size: 1.4rem;
    }
  }
}
</style>
