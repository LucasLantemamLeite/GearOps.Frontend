<template>
  <Title>DashBoard</Title>

  <section class="index-delimiter">
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

<style scoped lang="scss">
.index-delimiter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 95%;
}
</style>
