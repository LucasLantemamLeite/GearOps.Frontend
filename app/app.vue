<template>
  <NuxtPage />
  <NuxtLayout />

  <LoadingProvider />
  <NotificationProvider />
</template>

<script setup lang="ts">
import LoadingProvider from "./providers/LoadingProvider.vue";
import NotificationProvider from "./providers/NotificationProvider.vue";
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  height: auto;
  font-size: 1.6rem;
  line-height: 1.4;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}

#__nuxt {
  display: flex;
  justify-content: center;
}
</style>
