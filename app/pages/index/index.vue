<template>
  <Title>DashBoard</Title>

  <section class="flex flex-col items-center gap-4 w-[95%]">
    <Control />
    <ViewDevices />
  </section>

  <MediaLayout />
</template>

<script setup lang="ts">
import Control from "./fragments/Control.vue";
import ViewDevices from "./fragments/ViewDevices.vue";
import MediaLayout from "~/layouts/MediaLayout.vue";
</script>
