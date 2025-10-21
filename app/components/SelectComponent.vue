<template>
  <select @change="updateModelValue" :value="modelValue" :name="name" :id="id">
    <option v-for="(obj, key) in type" :key="key" :value="obj.value">{{ obj.label }}</option>
  </select>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  id?: string;
  modelValue?: number;
  type: Record<string, { label: string; value: number }>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

function updateModelValue(e: Event) {
  const target = e.target as HTMLSelectElement;

  emit("update:modelValue", Number(target.value));
}
</script>
