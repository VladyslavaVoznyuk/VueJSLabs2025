
<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


const theme = ref(localStorage.getItem('theme') || 'light')


function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  document.documentElement.classList.toggle('theme-dark', theme.value === 'dark')
}
</script>

<template>
  <div id="app">
    <Header @toggle-theme="toggleTheme" :theme="theme" />
  <transition name="page" mode="out-in">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </transition>


  <Footer />
  </div>
</template>



<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-enter-active {
  transition: all 220ms ease;
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-from {
  opacity: 1;
}
.page-leave-active {
  transition: opacity 180ms ease;
}
.page-leave-to {
  opacity: 0;
}


.active-link {
  font-weight: 700;
  text-decoration: underline;
}
</style>