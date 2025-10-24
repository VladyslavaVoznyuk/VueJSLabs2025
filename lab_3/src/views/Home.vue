
<script setup>
import { ref, onMounted } from 'vue'
import Newscard from '../components/NewsCard.vue'
import AdSlot from '../components/AdSlot.vue'
import Modal from '../components/Modal.vue'
import articles from '../data/articles.js'

const showModal = ref(false)

onMounted(() => {
  setTimeout(() => {
    showModal.value = true
  }, 5000)
})
</script>

<template>
  <div class="home">


    <main class="news-list">
      <h1>Останні новини</h1>

      <div class="cards">
        <Newscard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>

      <section class="ads">
        <AdSlot />
        <AdSlot />
      </section>
    </main>

    <Modal v-if="showModal" @close="showModal = false">
      <h2>Реклама</h2>
      <img src="/ads/ad1.jpg" alt="Ad" />
    </Modal>
  </div>
</template>

<style scoped>
.home {
  padding: 1rem 2rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

.news-list {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.ads {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 1rem;
}
</style>
