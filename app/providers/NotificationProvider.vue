<template>
  <div
    v-if="notification.message != ''"
    class="flex fixed max-w-[25rem] h-auto max-h-[10rem] overflow-auto justify-center items-center px-8 py-4 gap-4 bg-[#272727] bottom-[1rem] right-[1rem] rounded-[0.9rem] pointer-events-none shadow-md md:bottom-[6.5rem] md:gap-8 md:max-w-[35rem] md:px-8 md:py-4 lg:max-w-[40rem]"
  >
    <div :style="{ backgroundColor: getColorByType(notification.type) }" class="absolute w-[1rem] h-full left-0 rounded-l-[0.5rem]"></div>

    <ImageComponent :static-img="`/Icons/${notification.type}Icon.svg`" :alt-img="`${notification.type} Icon`" class="w-[5rem] md:w-[6rem] lg:w-[7rem]" />

    <p class="text-white text-[1.2rem] md:text-[1.6rem]">{{ notification.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { notification } from "~/global/Notification";

function getColorByType(type: string): string {
  switch (type) {
    case "Success":
      return "#32D74A";

    case "Error":
      return "#E93626";

    case "Warning":
      return "#D7D731";

    case "Info":
      return "#2D73DD";

    default:
      return "#32D74A";
  }
}
</script>
