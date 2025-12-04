<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-task'])
const newTask = ref('')

function addTask() {
  if (!newTask.value.trim()) return
  emit('add-task', newTask.value.trim())
  newTask.value = ''
}
</script>

<template>
  <div>
    <input
      v-model="newTask"
      placeholder="Enter new task"
    />
    <button @click="addTask">Add</button>
  </div>
</template>
