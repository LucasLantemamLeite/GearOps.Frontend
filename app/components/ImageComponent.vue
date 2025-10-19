<template>
  <img v-if="staticImg" :src="staticImg" :alt="altImg" v-bind="$attrs" />
</template>

<script setup lang="ts">
defineProps<{
  staticImg?: string;
  altImg?: string;
}>();
</script>
