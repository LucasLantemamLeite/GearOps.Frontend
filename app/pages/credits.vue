<template>
  <section>
    <div>
      <a href="https://www.flaticon.com/free-icon/forklift_4320180" target="_blank">
        <ImageComponent static-img="/Images/Forklift.png" alt-img="Forklift Image" />
      </a>
      <p>designed by <a href="https://www.flaticon.com/authors/dinosoftlabs" target="_blank">DinosoftLabs</a> from Flaticon</p>
    </div>

    <div>
      <a href="https://www.flaticon.com/free-icon/excavator_1008112" target="_blank">
        <ImageComponent static-img="/Images/Excavator.png" alt-img="Excavator Image" />
      </a>
      <p>designed by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a> from Flaticon</p>
    </div>

    <div>
      <a href="https://www.flaticon.com/free-icon/bulldozer_1008110" target="_blank">
        <ImageComponent static-img="/Images/Bulldozer.png" alt-img="Bulldozer Image" />
      </a>
      <p>designed by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a> from Flaticon</p>
    </div>

    <div>
      <a href="https://www.flaticon.com/free-icon/crane_1833115" target="_blank">
        <ImageComponent static-img="/Images/Crane.png" alt-img="Crane Image" />
      </a>
      <p>designed by <a href="https://www.flaticon.com/authors/nikita-golubev" target="_blank">Nikita Golubev</a> from Flaticon</p>
    </div>

    <div>
      <a href="https://www.flaticon.com/free-icon/loader_6678107" target="_blank">
        <ImageComponent static-img="/Images/Loader.png" alt-img="Loader Image" />
      </a>
      <p>designed by <a href="https://www.flaticon.com/authors/enes-gozcu" target="_blank">Enes Gozcu</a> from Flaticon</p>
    </div>

    <NuxtLink to="/" class="credits-retun-button">
      <ButtonComponent>Voltar</ButtonComponent>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "../styles/globalVariables.scss" as Var;

section {
  position: relative;
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  padding: 1rem;
  padding-bottom: 8rem;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: Var.$default-border;
  padding: 1rem;
  border-radius: Var.$default-border-radius;
  gap: 1rem;
  box-shadow: Var.$default-box-shadow;
}

img {
  width: 10rem;
}

p {
  text-align: center;
  font-size: 1.2rem;
}

.credits-retun-button {
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  text-decoration: none;

  & button {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: inherit;
    font-family: inherit;
    background-color: white;
    border-radius: Var.$default-border-radius;
    border: Var.$default-border;
    transition: all 200ms ease-in;

    &:hover {
      background-color: Var.$primary-hover-gray;
    }
  }
}
</style>

<style lang="scss">
@media (min-width: 1024px) {
  .credits-retun-button {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    transform: translateX(-50%);

    & button {
      padding: 1rem;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
}
</style>
