<template>
  <div class="article-page">

    <main v-if="article" class="content">
      <h1>{{ article.title }}</h1>
      <p class="date">{{ article.date }}</p>
      <img :src="article.image" :alt="article.title" class="article-img" />
      <p class="text">{{ article.content }}</p>

      <!-- Банер-реклама -->
      <div class="ad-banner" @click="openModal">
        <span>Реклама</span>
      </div>
    </main>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
          <div class="modal-window">
            <button class="close-btn" @click="closeModal">✕</button>
            <h2>Рекламне оголошення</h2>
            <img src="/ads/ad1.jpg" alt="Ad" class="ad-img" />
            <p>Смакуйте найкращі солодощі цієї осені 🍰</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import articles from '../data/articles.js'

const route = useRoute()
const showModal = ref(false)
const articleId = route.params.id

const article = computed(() =>
  articles.find((a) => a.id === Number(articleId))
)

const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)
</script>

<style scoped>
.article-page {
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.article-img {
  width: 100%;
  border-radius: 10px;
  margin: 1rem 0;
}

.text {
  font-size: 1.1rem;
  line-height: 1.6;
}

.date {
  color: rgb(128, 128, 128);
  font-size: 0.9rem;
}

.ad-banner {
  background: linear-gradient(90deg, #ffb300, #ff6f00);
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  font-weight: 600;
  transition: transform 0.2s ease;
}
.ad-banner:hover {
  transform: scale(1.03);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-window {
  background: var(--bg-color);
  color: var(--text-color);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.close-btn {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
}

.ad-img {
  width: 100%;
  border-radius: 10px;
  margin: 1rem 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
