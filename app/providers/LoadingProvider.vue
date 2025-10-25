<template>
  <section v-if="Loading" class="loading-background">
    <ImageComponent static-img="/Icons/LoadingIcon.svg" alt-img="Loading Icon" class="loading-spin" />
  </section>
</template>

<script setup lang="ts">
import { Loading } from "~/shared/Loading";
</script>

<style lang="scss">
@use "../styles/globalVariables.scss" as Var;

@keyframes loading-spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading {
  &-background {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 2;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
  }

  &-spin {
    width: 5rem;
    animation: 1s loading-spin linear infinite;
  }
}
</style>

<style lang="scss">
@use "../styles/globalVariables.scss" as Var;

// Responsividade //

.loading {
  @media (min-width: 600px) {
    &-spin {
      width: 10rem;
    }
  }

  @media (min-width: 1024px) {
  }
}
</style>
