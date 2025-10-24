<template>
  <main class="not-found">
    <h1>404 — Сторінку не знайдено 😢</h1>
    <p>Можливо, ви помилилися в адресі.</p>
    <router-link to="/">На головну</router-link>
  </main>
</template>

<script setup></script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  color: var(--text-color);
}
a {
  margin-top: 1rem;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
</style>
