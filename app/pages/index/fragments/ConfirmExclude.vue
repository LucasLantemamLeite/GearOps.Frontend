<template>
  <section class="confirm_exclude-background" v-if="modelValue">
    <div class="confirm_exclude-box">
      <div class="confirm_exclude-message-warning">
        <ImageComponent static-img="/Icons/WarningIcon.svg" alt-img="Warning Icon" />
        <p>Tem certeza que deseja remover o dispositivo '{{ name }}'?</p>
      </div>

      <div class="confirm_exclude-buttons-container">
        <ButtonComponent :style="timer.seconds !== 0 ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: pointer; opacity: 1;'" :disabled="timer.seconds != 0" @click="deleteDevice(id, closeModal)">Confirmar {{ timer.seconds != 0 ? timer.seconds : "" }}</ButtonComponent>

        <ButtonComponent @click="cancelExclude">Cancelar</ButtonComponent>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { deleteDevice } from "~/services/requests/deleteDevice";

const props = defineProps<{
  modelValue: boolean;
  id: string;
  name: string;
  closeModal: () => void;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function cancelExclude() {
  emit("update:modelValue", false);
}

const timer = reactive({
  seconds: 3,
  interval: null,
} as { seconds: number; interval: any });

watch(
  () => props.modelValue,
  (newVal) => {
    if (timer.interval) clearInterval(timer.interval);

    if (newVal) {
      timer.seconds = 3;
      timer.interval = setInterval(() => {
        if (timer.seconds > 0) timer.seconds--;
        else clearInterval(timer.interval);
      }, 1000);
    }
  },
  { immediate: true }
);
</script>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

.confirm_exclude {
  &-background {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }

  &-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 90%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: Var.$default-border-radius;
    box-shadow: Var.$default-box-shadow;
  }

  &-message-warning {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    & img {
      width: 4rem;
    }

    & p {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  &-buttons-container {
    display: flex;
    gap: 1rem;
    align-items: center;

    & button {
      font-size: 1.2rem;
      padding: 0.5rem;
      border: Var.$default-border;
      border-radius: Var.$default-border-radius;
      box-shadow: Var.$default-box-shadow;
      transition: all 200ms ease-in;

      &:active {
        box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.4);
        transform: translate(2px, 2px);
      }
    }
  }
}
</style>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

// Responsividade //

.confirm_exclude {
  @media (min-width: 600px) {
    &-box {
      width: 50rem;
    }

    &-message-warning {
      & img {
        width: 5rem;
      }

      & p {
        font-size: 1.4rem;
      }
    }

    &-buttons-container button {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    &-buttons-container button:hover {
      background-color: Var.$primary-hover-gray;
    }
  }
}
</style>
