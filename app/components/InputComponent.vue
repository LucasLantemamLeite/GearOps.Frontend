<template>
  <input v-bind="$attrs" :class="class" :name="name" :id="id" :value="value" :placeholder="placeholder" />
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  id?: string;
  class?: string;
  value?: any;
  placeholder?: string;
}>();
</script>
