<template>
  <div class="flex relative w-[80%] h-[20rem] flex-col items-center p-4 mb-2 bg-[#272727] text-[white] text-[1.5rem] rounded-[0.9rem] shadow-md md:h-[24rem]">
    <div :style="{ backgroundColor: getColorByStatus(previewDevice.status) }" class="flex absolute w-full h-[1rem] top-0 rounded-t-[0.5rem]"></div>

    <p class="p-2 mt-4 mb-2 text-center text-[1.4rem] border-2 rounded-[0.9rem] md:text-[1.6rem]">{{ previewDevice.name || "Nome da máquina" }}</p>

    <ImageComponent :static-img="`/Images/${getImageByType(previewDevice.type)}.png`" :alt-img="`${getImageByType(previewDevice!.type)} Image`" class="mb-2 w-[8rem] mb-10 md:w-[10rem]" />

    <div v-if="previewDevice.status === 3" class="flex w-[70%] items-center flex-col gap-2">
      <div class="flex items-center w-full justify-between gap-2">
        <ImageComponent static-img="/Icons/StartIcon.svg" class="w-[2rem]" />
        <p class="text-white text-[1.2rem] md:text-[1.6rem]">{{ previewDevice.start ? formateDateISO(previewDevice.start, true) : "Não definido" }}</p>
      </div>

      <hr class="h-[0.2rem] w-[120%] bg-[#92929250] border-none rounded-[0.9rem]" />

      <div class="flex items-center w-full justify-between gap-2">
        <ImageComponent static-img="/Icons/ReturnIcon.svg" class="w-[2rem]" />
        <p class="text-white text-[1.2rem] md:text-[1.6rem]">{{ previewDevice.return ? formateDateISO(previewDevice.return, true) : "Não definido" }}</p>
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
