
<script setup>
</script>

<template>
  <footer>
    <div class="inner">
      <small>© 2025 NewsLab</small>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer { border-top: 1px solid rgba(0,0,0,0.06); }
.inner { display:flex; justify-content:space-between; align-items:center; }
nav a { margin-left: 8px; color: var(--muted); }
</style>