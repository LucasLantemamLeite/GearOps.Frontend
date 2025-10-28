<template>
  <section class="media_layout-background">
    <a href="https://www.linkedin.com/in/lucas-lantemam-leite-200bb8243/" target="_blank">
      <ImageComponent static-img="/Icons/LinkedinIcon.svg" alt-img="Linkedin Icon" class="media_layout-icons" />
    </a>

    <a href="https://www.instagram.com/lucaslantemaml?igsh=MWs1OGd2NmszcGs3bQ==" target="_blank">
      <ImageComponent static-img="/Icons/InstagramIcon.svg" alt-img="Instagram Icon" class="media_layout-icons" />
    </a>

    <a href="https://github.com/LucasLantemamLeite" target="_blank">
      <ImageComponent static-img="/Icons/GitHubIcon.svg" alt-img="GitHub Icon" class="media_layout-icons" />
    </a>

    <NuxtLink to="/credits" class="media_layout-link-credits">
      <p>Créditos</p>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use "../styles/globalVariables.scss" as Var;

.media_layout {
  &-background {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: Var.$primary-dark-color;
    box-shadow: 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.4);
  }

  &-icons {
    width: 3rem;
    cursor: default;
  }

  &-link-credits {
    position: absolute;
    font-size: 1.2rem;
    color: white;
    right: 2rem;
    z-index: 1;
  }
}
</style>

<style lang="scss">
// Responsividade //

.media_layout {
  @media (min-width: 600px) {
    &-background {
      height: 6rem;
      top: inherit;
      bottom: 0;
      box-shadow: none;
    }

    &-icons {
      width: 4rem;
    }

    &-link-credits {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    &-icons {
      width: 4.5rem;
      transition: all 100ms ease-in;
      cursor: pointer;

      &:hover {
        transform: translateY(-3px);
      }
    }
  }
}
</style>
