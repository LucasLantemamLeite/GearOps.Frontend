<template>
  <section class="control-background">
    <div class="control-search-div">
      <InputComponent placeholder="Buscar..." @keyup.enter="onEnter" :value="Filter" />

      <ImageComponent v-if="Filter != ''" static-img="/Icons/ClearIcon.svg" alt-img="Clear Icon" class="control-clear-icon" @click="Filter = ''" />

      <div class="control-icon-wrapper">
        <ImageComponent static-img="/Icons/SearchIcon.svg" alt-img="Search Icon" />
      </div>
    </div>

    <div @click="isCreating = true" class="control-icon-background">
      <ImageComponent static-img="/Icons/AddIcon.svg" alt-img="Add Icon" />
    </div>
  </section>

  <DeviceModelBlock v-model="isCreating" :device="null" />
</template>

<script setup lang="ts">
import { getSearch } from "~/services/requests/getSearch";
import DeviceModelBlock from "./DeviceModal.vue";
import { Filter } from "~/shared/Devices";

function onEnter(e: KeyboardEvent) {
  const target = e.target as HTMLInputElement;
  Filter.value = target.value;
}

watch(
  () => Filter.value,
  () => {
    getSearch();
  },
  { immediate: true }
);

const isCreating = ref(false);
</script>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

.control {
  &-background {
    display: flex;
    height: 3.5rem;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 6rem;
  }

  &-search-div {
    display: flex;
    position: relative;
    width: 25rem;
    height: 100%;
    align-items: center;

    & input {
      height: 100%;
      width: 100%;
      border: 2px solid Var.$primary-dark-color;
      font-size: 1.2rem;
      font-weight: inherit;
      font-family: inherit;
      padding: 1rem;
      border-radius: Var.$default-border-radius;
      box-shadow: Var.$default-box-shadow;
      outline: none;

      &::selection {
        color: white;
        background-color: Var.$primary-dark-color;
      }
    }
  }

  &-clear-icon {
    display: flex;
    position: absolute;
    right: 4rem;
    align-items: center;
    width: 2rem;
  }

  &-icon-wrapper {
    display: flex;
    position: absolute;
    height: 100%;
    align-items: center;
    right: 1rem;
    border-left: 2px solid Var.$primary-dark-color;
    padding-left: 0.5rem;
    pointer-events: none;

    & img {
      width: 2rem;
    }
  }

  &-icon-background {
    display: flex;
    height: 100%;
    align-items: center;
    border: Var.$default-border;
    padding: 0.5rem;
    border-radius: Var.$default-border-radius;
    box-shadow: Var.$default-box-shadow;

    & img {
      width: 2rem;
    }
  }
}
</style>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

// Responsividade //

.control {
  @media (min-width: 600px) {
    &-background {
      margin-top: 2rem;
    }

    &-search-div {
      width: 30rem;

      & input {
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: 1024px) {
    &-background {
      height: 4rem;
    }

    &-search-div {
      width: 40rem;
    }

    &-clear-icon {
      width: 2rem;
      right: 5.5rem;
      cursor: pointer;
    }

    &-icon-wrapper img {
      width: 3rem;
    }

    &-icon-background {
      cursor: pointer;
      transition: all 100ms ease;

      &:hover {
        background-color: Var.$primary-hover-gray;
      }

      & img {
        width: 3rem;
      }
    }
  }
}
</style>
