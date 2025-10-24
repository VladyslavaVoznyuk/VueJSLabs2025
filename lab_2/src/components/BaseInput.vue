<script setup>
import { defineModel } from 'vue'

defineModel('modelValue')

const props = defineProps({
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: String,
  error: String,
})
const emit = defineEmits(['update:modelValue', 'input'])

function onInput(e) {
  emit('update:modelValue', e.target.value)
  emit('input', e.target.value)
}
</script>

<template>
  <div class="input-group">
    <label v-if="label">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" :value="modelValue" @input="onInput" />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<style scoped>
.input-group {
  margin-bottom: 12px;
}
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
