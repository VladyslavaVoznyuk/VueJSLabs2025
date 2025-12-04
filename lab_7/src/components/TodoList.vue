<script setup>
import TodoItem from '@/components/TodoItem.vue'

const props = defineProps({
  tasks: Array
})

const emit = defineEmits(['toggle-task', 'delete-task'])
</script>

<template>
  <ul>
    <TodoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="emit('toggle-task', task.id)"
      @delete="emit('delete-task', task.id)"
    />
  </ul>
</template>
