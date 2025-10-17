<template>
  <Title>DashBoard</Title>

  <section class="index__delimiter">
    <ControlSection />
  </section>

  <MediaLayout />
</template>

<script setup lang="ts">
import MediaLayout from "~/layouts/MediaLayout.vue";
import ControlSection from "~/sections/ControlSection/ControlSection.vue";
</script>

<style lang="scss">
.index__delimiter {
  width: 90%;
}
</style>
