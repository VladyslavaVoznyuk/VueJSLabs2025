<template>
  <main class="about-page">
    <h1>Про нас</h1>
    <p>
      Сайт новин створено для демонстрації стилізації компонентів у Vue.js.
      Тут можна побачити приклади <strong>scoped</strong> стилів, CSS Modules,
      а також використання <strong>Teleport</strong> і <strong>Transition</strong>.
    </p>
  </main>
</template>

<script setup></script>

<style scoped>
.about-page {
  padding: 2rem;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}
</style>
