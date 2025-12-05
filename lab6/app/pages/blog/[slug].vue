<script setup>
const route = useRoute();

const {
  data: post,
  pending,
  error,
} = await useFetch(() => `/api/posts/${route.params.slug}`);

useSeoMeta({
  title: () => `${post.value?.title || "Стаття"} — Nuxt Course Blog`,
  description: () => post.value?.content?.slice(0, 120) || "Опис статті",
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.content?.slice(0, 120),
});
</script>

<template>
  <UContainer class="post-container">
    <NuxtLink to="/blog" class="back-link"> ← Назад </NuxtLink>

    <UAlert v-if="pending" color="blue" title="Завантаження..." class="alert" />

    <UAlert
      v-if="error"
      color="red"
      title="Помилка"
      description="Статтю не знайдено "
      class="alert"
    />

    <UCard v-if="post" class="post-card">
      <template #header>
        <h1 class="post-title">{{ post.title }}</h1>
      </template>

      <p class="post-content">
        {{ post.content }}
      </p>
    </UCard>
  </UContainer>
</template>

<style scoped>
.post-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #017a52;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #03563a;
}

.alert {
  margin-top: 12px;
  margin-bottom: 20px;
}

.post-card {
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  padding: 24px;
  background: #1f2937;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
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
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
}

.post-content {
  color: #475569;
  line-height: 1.7;
  font-size: 18px;
  white-space: pre-line;
}
</style>
