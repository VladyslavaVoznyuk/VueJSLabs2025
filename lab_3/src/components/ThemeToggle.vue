<template>
  <button @click="toggleTheme" class="theme-btn">
    {{ theme === 'light' ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  document.documentElement.setAttribute('data-theme', theme.value)
}
</script>

<style scoped>
.theme-btn {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  background: var(--accent-color);
  color: var(--text-color);
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.theme-btn:hover {
  opacity: 0.85;
}
</style>
