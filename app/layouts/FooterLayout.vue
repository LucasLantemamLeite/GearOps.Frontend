<template>
  <section class="footer-layout__background">
    <a href="https://www.linkedin.com/in/lucas-lantemam-leite-200bb8243/" target="_blank">
      <ImageComponent static-img="/Icons/LinkedinIcon.svg" alt-img="Linkedin Icon" class="footer-layout__social-icons" />
    </a>
    <a href="https://www.instagram.com/lucaslantemaml?igsh=MWs1OGd2NmszcGs3bQ==" target="_blank">
      <ImageComponent static-img="/Icons/InstagramIcon.svg" alt-img="Instagram Icon" class="footer-layout__social-icons" />
    </a>
    <a href="https://github.com/LucasLantemamLeite" target="_blank">
      <ImageComponent static-img="/Icons/GitHubIcon.svg" alt-img="GitHub Icon" class="footer-layout__social-icons" />
    </a>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.footer-layout {
  &__background {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(36, 36, 36);
    width: 100%;
    padding: 1rem;
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.6);
  }

  &__social-icons {
    width: clamp(1rem, 8vw, 4rem);
  }

  @media (min-width: 1024px) {
    &__background {
      top: inherit;
      bottom: 0;
      box-shadow: none;
    }

    &__social-icons {
      transition: all 200ms ease-in;

      &:hover {
        transform: translateY(-3px);
      }
    }
  }
}
</style>
