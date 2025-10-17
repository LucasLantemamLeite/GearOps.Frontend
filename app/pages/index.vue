<template>
  <Title>DashBoard</Title>

  <section class="index__delimiter">
    <ControlLayout />
  </section>

  <FooterLayout />
</template>

<script setup lang="ts">
import FooterLayout from "~/layouts/FooterLayout.vue";
import ControlLayout from "~/sections/FilterLayout/ControlLayout.vue";
</script>

<style lang="scss">
.index__delimiter {
  width: 90%;
}
</style>
