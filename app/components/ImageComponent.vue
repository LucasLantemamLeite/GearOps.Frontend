<template>
  <img v-if="staticImg" :src="staticImg" :alt="altImg" :class="class" />
</template>

<script setup lang="ts">
defineProps<{
  staticImg?: string;
  altImg?: string;
  class?: string;
}>();
</script>
