<template>
  <section class="control-block__background">
    <InputComponent placeholder="Buscar..." class="control-block__search" />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.control-block {
  &__background {
    display: flex;
    align-items: center;
    margin-top: clamp(3rem, 13vw, 5.5rem);
    width: 100%;
    height: 3rem;
  }

  &__search {
    border: 2px solid #242424;
    border-radius: 0.9rem;
    padding: 0.5rem;
    font-size: clamp(1rem, 2vw, 1.4rem);
    width: clamp(15rem, 20vw, 25rem);
    font-weight: inherit;
    font-family: inherit;
    outline: none;

    &::selection {
      color: white;
      background-color: #242424;
    }
  }

  @media (min-width: 1024px) {
    &__background {
      margin-top: 1.5rem;
    }
  }
}
</style>
