<template>
  <input @input="updateModelValue" :maxlength="maxLength" v-bind="$attrs" :type="type" :name="name" :id="id" :value="modelValue" :placeholder="placeholder" autocomplete="off" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string;
    id?: string;
    modelValue?: string | number;
    placeholder?: string;
    type?: string;
    maxLength?: string;
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
  else if (props.maxLength) value = (value as string).slice(0, Number(props.maxLength));

  target.value = value as string;
  emit("update:modelValue", value);
}
</script>
