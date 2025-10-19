<template>
  <Title>DashBoard</Title>

  <section class="flex flex-col items-center gap-4 w-[95%]">
    <ControlBlock />
    <DevicesBlock />
  </section>

  <MediaLayout />
</template>

<script setup lang="ts">
import ControlBlock from "~/blocks/ControlBlock.vue";
import DevicesBlock from "~/blocks/DevicesBlock.vue";
import MediaLayout from "~/layouts/MediaLayout.vue";
</script>
