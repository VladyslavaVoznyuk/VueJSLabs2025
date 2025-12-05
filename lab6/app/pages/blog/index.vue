<script setup>
const { data: posts, pending, error } = await useFetch("/api/posts");

useSeoMeta({
  title: "Блог — Nuxt Course Blog",
  description: "Список статей про Nuxt 4, SSR/SSG та Nitro.",
  ogTitle: "Блог — Nuxt Course Blog",
  ogDescription: "Огляд усіх доступних статей.",
});
</script>

<template>
  <UContainer class="blog-container">
    <h1 class="blog-title">Список статей</h1>

    <UAlert
        v-if="pending"
        class="blog-alert loading"
        color="blue"
        title="Завантаження..."
    />

    <UAlert
        v-if="error"
        class="blog-alert error"
        color="red"
        title="Помилка"
        description="Не вдалося завантажити список статей "
    />

    <div v-if="posts && posts.length" class="posts-grid">
      <UCard v-for="post in posts" :key="post.slug" class="post-card">
        <template #header>
          <h2 class="post-title">{{ post.title }}</h2>
        </template>

        <p class="post-preview">{{ post.content.slice(0, 120) }}…</p>

        <template #footer>
          <NuxtLink :to="`/blog/${post.slug}`" class="primary-button">
            Читати далі →
          </NuxtLink>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<style scoped>
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 0;
}

.blog-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #d1d5db;
}

.blog-alert {
  margin-bottom: 20px;
}

.loading {
  background: rgba(56, 189, 248, 0.1) !important;
}

.error {
  background: rgba(248, 113, 113, 0.1) !important;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.post-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: #1f2937;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  background: #253140;
}

.post-title {
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: #f3f4f6;
}

.post-preview {
  color: #9ca3af;
  line-height: 1.6;
  margin: 16px 0;
}

</style>