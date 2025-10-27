<template>
  <div v-if="Pages.Count != 0" class="pagination-background">
    <p :style="{ backgroundColor: Pages.Current == 1 ? '#32c27a' : '#272727', color: Pages.Current == 1 ? 'black' : 'white' }" @click="Pages.Current = 1">1</p>

    <p v-if="Pages.Current > 3">...</p>

    <p :style="{ backgroundColor: Pages.Current == page ? '#32c27a' : '#272727', color: Pages.Current == page ? 'black' : 'white' }" @click="Pages.Current = page" v-for="page in middlePages">{{ page }}</p>

    <p v-if="Pages.Count > 3 && middlePages.at(-1)! < Pages.Count - 1">...</p>

    <p v-if="Pages.Count > 1" :style="{ backgroundColor: Pages.Current == Pages.Count ? '#32c27a' : '#272727', color: Pages.Current == Pages.Count ? 'black' : 'white' }" @click="Pages.Current = Pages.Count">{{ Pages.Count }}</p>
  </div>
</template>

<script setup lang="ts">
import { getPages } from "~/services/requests/getPages";
import { Pages } from "~/shared/Pages";

const middlePages = computed(() => {
  const total = Pages.Count;
  const current = Pages.Current;

  if (total <= 2) return [];

  const pages: number[] = [];

  for (let i = current - 1; i < total; i++) {
    if (i > 1 && i <= current + 1) pages.push(i);
  }

  return pages;
});

onMounted(() => {
  getPages();
});
</script>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

.pagination {
  &-background {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transform: translateX(-50%);

    & p {
      display: flex;
      padding: 1rem;
      color: #32c27a;
      font-size: 1.2rem;
      height: 3rem;
      width: 3rem;
      justify-content: center;
      align-items: center;
      color: black;
      border-radius: 100%;
    }
  }
}
</style>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

// Responsividade //

.pagination {
  @media (min-width: 600px) {
    &-background p {
      font-size: 1.4rem;
      height: 4rem;
      width: 4rem;
    }
  }
}
</style>
