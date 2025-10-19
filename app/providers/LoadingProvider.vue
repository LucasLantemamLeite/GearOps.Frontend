<template>
  <section v-if="Loading" class="flex justify-center items-center fixed w-full h-full inset-0 z-10 bg-[rgba(0,0,0,0.6)] backdrop-blur-[3px]">
    <ImageComponent static-img="/Icons/LoadingIcon.svg" alt-img="Loading Icon" class="w-[5rem] animate-spin md:w-[10rem] lg:w-[15rem]" />
  </section>
</template>

<script setup lang="ts">
import { Loading } from "~/global/Loading";
</script>
