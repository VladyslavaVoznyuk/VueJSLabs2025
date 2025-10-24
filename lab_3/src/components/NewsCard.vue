<template>
  <article class="card">
    <img :src="article.image" :alt="article.title" class="image" />
    <div class="body">
      <h3>{{ article.title }}</h3>
      <p class="date">{{ article.date }}</p>
      <p class="description">{{ article.description }}</p>
      <router-link :to="`/article/${article.id}`" class="btn">
        Читати далі
      </router-link>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.date {
  font-size: 0.85rem;
  color: rgb(128, 128, 128);
}

.description {
  flex-grow: 1;
}

.btn {
  background-color: var(--accent-color);
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #444;
}
</style>
