<template>
  <input v-bind="$attrs" :name="name" :id="id" :value="value" :placeholder="placeholder" />
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  id?: string;
  value?: any;
  placeholder?: string;
}>();
</script>
