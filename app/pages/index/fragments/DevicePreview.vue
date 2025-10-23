<template>
  <div class="flex relative w-[80%] h-[20rem] flex-col items-center justify-center p-4 mb-2 bg-[#272727] text-[white] text-[1.5rem] rounded-[0.9rem] shadow-md">
    <div :style="{ backgroundColor: getColorByStatus(previewDevice.status) }" class="flex absolute w-full h-[1rem] top-0 rounded-t-[0.5rem]"></div>

    <ImageComponent :static-img="`/Images/${getImageByType(previewDevice.type)}.png`" :alt-img="`${getImageByType(previewDevice!.type)} Image`" class="w-[9rem] mb-10 md:w-[10rem]" />

    <hr class="absolute bottom-[5.5rem] h-1 w-[85%] bg-[#92929250] border-none rounded-[0.9rem]" />

    <p class="absolute bottom-4 p-2 text-center text-[1.4rem] border-2 rounded-[0.9rem]">{{ previewDevice.name == "" ? "Nome da máquina" : previewDevice.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { getColorByStatus, getImageByType } from "~/shared/Devices";

defineProps<{
  previewDevice: { name: string; type: number; status: number };
}>();
</script>
