<script setup>
useSeoMeta({
  title: "Nuxt Course Blog — Головна",
  description:
      "Лабораторний проєкт: Nuxt Course Blog. Вивчення Nuxt 4, SSR, SSG, Nitro API та useFetch.",
  ogTitle: "Nuxt Course Blog — Головна",
  ogDescription:
      "Навчальний проєкт, створений для вивчення Nuxt 4 та його ключових можливостей.",
});
</script>

<template>
  <div class="custom-container space-y-8">
    <h1 class="text-4xl font-extrabold text-[#10b981]">
      Ласкаво просимо
    </h1>
    <p class="text-lg text-gray-300">
      Тут ви знайдете найкращі статті про розробку на Nuxt та Vue.js.
      Наш сайт має темну тему та центровану навігацію для вашої зручності.
    </p>

    <h2 class="text-2xl font-semibold text-gray-200 pt-4">Інформаційний блок:</h2>

    <ArticleCard />

    <UAlert
        class="custom-alert"
        color="blue"
        title="Інформація"
        description="Це приклад кастомної стилізації компонентів Nuxt UI, адаптованої для Dark/Teal теми."
    />
  </div>
</template>

<style scoped>
.custom-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 0;
}

.custom-alert {
  border-radius: 14px;
  background: #1f2937 !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 20px;
  color: #c5e9f6;
  margin-top: 20px;
}
</style>