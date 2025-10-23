<template>
  <input @input="updateModelValue" :maxlength="maxLenght" v-bind="$attrs" :type="type" :name="name" :id="id" :value="modelValue" :placeholder="placeholder" autocomplete="off" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string;
    id?: string;
    modelValue?: string | number;
    placeholder?: string;
    type?: string;
    maxLenght?: string;
  }>(),
  {
    modelValue: "",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

function updateModelValue(e: Event) {
  var target = e.target as HTMLInputElement;
  let value: string | number = target.value;

  if (props.type === "number") value = Number(value);

  emit("update:modelValue", value);
}
</script>
