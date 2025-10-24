<template>
  <div
    v-if="notification.message != ''"
    class="flex fixed w-auto max-w-[30rem] h-auto max-h-[15rem] justify-center items-center z-20 px-10 py-4 gap-4 bg-[#272727] bottom-[1rem] right-[1rem] rounded-[0.9rem] shadow-md md:bottom-[6.5rem] md:gap-8 md:max-w-[20rem] md:px-8 md:py-4 lg:px-12 lg:max-w-[50rem]"
  >
    <div :style="{ backgroundColor: getColorByType(notification.type) }" class="absolute w-[1rem] h-full left-0 rounded-l-[0.5rem]"></div>

    <ImageComponent :static-img="`/Icons/${notification.type}Icon.svg`" :alt-img="`${notification.type} Icon`" class="flex-shrink-0 w-[3rem]" />

    <ImageComponent @click="notification.message = ''" static-img="/Icons/CloseIcon.svg" alt-img="Close Icon" class="absolute w-[1rem] top-[1rem] right-[1rem] lg:cursor-pointer invert-[100%] md:w-[1.2rem] overflow-auto" />

    <p class="text-white text-[1.2rem] md:text-[1.4rem]">{{ notification.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { notification, getColorByType } from "~/shared/Notification";
</script>
