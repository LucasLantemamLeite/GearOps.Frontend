<template>
  <Title>DashBoard</Title>

  <section class="index__delimiter">
    <ControlBlock />
  </section>

  <MediaLayout />
</template>

<script setup lang="ts">
import ControlBlock from "~/blocks/ControlBlock/ControlBlock.vue";
import MediaLayout from "~/layouts/MediaLayout.vue";
</script>

<style lang="scss">
.index__delimiter {
  width: 90%;
}
</style>
