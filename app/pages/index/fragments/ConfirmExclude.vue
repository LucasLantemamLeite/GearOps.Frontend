<template>
  <section class="flex fixed z-10 w-full h-full inset-0 flex-col items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px]" v-if="modelValue">
    <div class="flex w-[90%] flex-col p-8 gap-8 items-center justify-center bg-white rounded-[0.9rem] shadow-md md:w-[50rem]">
      <div class="flex items-center justify-center gap-4">
        <ImageComponent static-img="/Icons/WarningIcon.svg" alt-img="Warning Icon" class="w-[4rem]" />
        <p class="text-center text-[1.4rem]">Tem certeza que deseja remover o dispositivo '{{ name }}'?</p>
      </div>

      <div class="flex gap-8">
        <ButtonComponent
          :style="timer !== 0 ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: pointer; opacity: 1;'"
          :disabled="timer != 0"
          @click="deleteDevice(id, closeModal)"
          class="p-2 text-[1.4rem] border-2 border-[#272727] rounded-[0.9rem] shadow-md active:shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all lg:hover:bg-[#c9c9c9]"
          >Confirmar {{ timer != 0 ? timer : "" }}</ButtonComponent
        >

        <ButtonComponent class="p-2 border-2 border-[#272727] rounded-[0.9rem] shadow-md active:shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all lg:hover:bg-[#c9c9c9] lg:cursor-pointer" @click="cancelExclude">Cancelar</ButtonComponent>
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

const timer = ref(5);

let interval: any = null;

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function cancelExclude() {
  emit("update:modelValue", false);
}

watch(
  () => props.modelValue,
  (newVal) => {
    if (interval) clearInterval(interval);

    if (newVal) {
      timer.value = 5;
      interval = setInterval(() => {
        if (timer.value > 0) timer.value--;
        else clearInterval(interval);
      }, 1000);
    }
  },
  { immediate: true }
);
</script>
