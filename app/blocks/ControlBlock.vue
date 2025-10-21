<template>
  <section class="flex w-full h-[3.5rem] justify-between items-center mt-[6rem] md:mt-8 lg:h-[4rem]">
    <div class="flex relative items-center h-full">
      <InputComponent placeholder="Buscar..." class="h-full w-[25rem] p-4 outline-none rounded-[0.9rem] border-2 border-[#272727] selection:bg-[#272727] selection:text-white shadow-md md:w-[30rem] lg:w-[40rem]" />

      <div class="flex absolute h-full items-center right-4 border-l-2 border-l-[#272727] pl-2 pointer-events-none">
        <ImageComponent static-img="/Icons/SearchIcon.svg" alt-img="Search Icon" class="w-[2rem] lg:w-[3rem]" />
      </div>
    </div>

    <div class="flex h-full justify-between items-center gap-2">
      <div class="flex items-center border-2 h-full border-[#272727] p-2 rounded-[0.9rem] shadow-md lg:cursor-pointer lg:hover:bg-[#c9c9c9] transition-all">
        <ImageComponent static-img="/Icons/FilterIcon.svg" alt-img="Filter Icon" class="w-[2rem] lg:w-[3rem]" />
      </div>
      <div @click="isCreating = true" class="flex items-center border-2 h-full border-[#272727] p-2 rounded-[0.9rem] shadow-md lg:cursor-pointer lg:hover:bg-[#c9c9c9] transition-all">
        <ImageComponent static-img="/Icons/AddIcon.svg" alt-img="add Icon" class="w-[2rem] lg:w-[3rem]" />
      </div>
    </div>
  </section>

  <DeviceModelBlock v-model="isCreating" :device="null" />
</template>

<script setup lang="ts">
import DeviceModelBlock from "./DeviceModelBlock.vue";

const isCreating = ref(false);
</script>
