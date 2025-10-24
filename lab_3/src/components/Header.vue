
<script setup>
import ThemeToggle from './ThemeToggle.vue'
import { defineEmits, defineProps } from 'vue'


const emit = defineEmits(['toggle-theme'])
const props = defineProps({ theme: { type: String, default: 'light' } })


function onToggle() { emit('toggle-theme') }
</script>

<template>
  <header>
    <div class="inner">
      <h1 class="logo"><router-link to="/">NewsLab</router-link></h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div class="controls">
        <ThemeToggle @toggle="onToggle" :theme="theme" />
      </div>
    </div>
  </header>
</template>


<style scoped>
header { background: linear-gradient(90deg, rgba(255,255,255,0.03), transparent); border-bottom: 1px solid rgba(0,0,0,0.06); }
.inner { display:flex; align-items:center; gap:16px; justify-content:space-between; }
.logo a { color: var(--text); text-decoration: none; }
nav a { margin: 0 8px; color: var(--muted); }
.controls { display:flex; align-items:center; }
</style>