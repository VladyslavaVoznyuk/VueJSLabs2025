<script setup>
import { ref, computed } from 'vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'

const filter = ref('all')
const tasks = ref([
  { id: 1, title: 'Learn Vue', status: 'active' },
  { id: 2, title: 'Write tests', status: 'active' }
])

function addTask(title) {
  tasks.value.push({
    id: Date.now(),
    title,
    status: 'active'
  })
}

function toggleTask(id) {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    task.status = task.status === 'active' ? 'done' : 'active'
  }
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const filteredTasks = computed(() => {
  if (filter.value === 'active') return tasks.value.filter(t => t.status === 'active')
  if (filter.value === 'done') return tasks.value.filter(t => t.status === 'done')
  return tasks.value
})
</script>

<template>
  <main class="p-6">
    <h1 class="text-3xl font-bold mb-4">Todo App</h1>

    <TodoInput @add-task="addTask" />

    <div class="flex gap-2 my-4">
      <button @click="filter = 'all'">All</button>
      <button @click="filter = 'active'">Active</button>
      <button @click="filter = 'done'">Done</button>
    </div>

    <TodoList
      :tasks="filteredTasks"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </main>
</template>
