<template>
  <div v-if="notification.message != ''" class="notification-background">
    <div :style="{ backgroundColor: getColorByType(notification.type) }" class="notification-status"></div>

    <ImageComponent :static-img="`/Icons/${notification.type}Icon.svg`" :alt-img="`${notification.type} Icon`" class="notification-status-icon" />

    <ImageComponent @click="notification.message = ''" static-img="/Icons/CloseIcon.svg" alt-img="Close Icon" class="notification-close-icon" />

    <p class="notification-message">{{ notification.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { notification, getColorByType } from "~/shared/Notification";
</script>

<style lang="scss">
@use "../styles/globalVariables.scss" as Var;

.notification {
  &-background {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    gap: 1rem;
    padding: 1rem 2rem;
    width: auto;
    max-width: 25rem;
    height: auto;
    max-height: 15rem;
    align-items: center;
    justify-content: center;
    z-index: 3;
    background-color: Var.$primary-dark-color;
    border-radius: Var.$default-border-radius;
    box-shadow: Var.$default-box-shadow;
  }

  &-status {
    position: absolute;
    left: 0;
    width: 1rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &-status-icon {
    flex-shrink: 0;
    width: 3rem;
  }

  &-close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1rem;
    filter: invert(100%);
  }

  //text-white text-[1.2rem] md:text-[1.4rem]

  &-message {
    color: white;
    font-size: 1.2rem;
  }
}
</style>
<style lang="scss">
@use "../styles/globalVariables.scss" as Var;

// Responsivade //

.notification {
  @media (min-width: 600px) {
    &-background {
      bottom: 6.5rem;
      gap: 2rem;
      max-width: 40rem;
      padding: 1rem 2rem 1rem 2rem;
    }

    &-close-icon {
      width: 1.2rem;
    }

    &-message {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    &-background {
      bottom: 6.5rem;
      gap: 2rem;
      max-width: 50rem;
      padding: 1rem 3rem 1rem 3rem;
    }

    &-close-icon {
      cursor: pointer;
    }
  }
}
</style>
