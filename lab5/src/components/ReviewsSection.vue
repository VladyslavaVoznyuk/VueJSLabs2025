<script setup>
import Card from 'primevue/card'
</script>

<template>
  <section class="reviews-section p-6">
    <h2 class="text-2xl mb-4 font-bold text-center">Відгуки</h2>

    <div class="grid sm:grid-cols-2 gap-6">

      <Card class="review-card">
        <template #content>
          <p>
            “Завдяки SaaS Tasker наша команда зекономила до 20 годин на тиждень!”
          </p>
        </template>
        <template #footer>
          <p class="font-bold mt-3">Андрій</p>
        </template>
      </Card>

      <Card class="review-card">
        <template #content>
          <p>
            “Простий та ефективний інструмент. Рекомендую!”
          </p>
        </template>
        <template #footer>
          <p class="font-bold mt-3">Олена</p>
        </template>
      </Card>

    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  background: #f9fafc;
  padding: 80px 24px;
}

.reviews-section h2 {
  color: #111827;
}

.review-card {
  background: #ffffff !important;
  color: #1f2937 !important;
  text-align: left;
  padding: 24px !important;
  border-radius: 16px !important;
  box-shadow: 0 6px 24px rgba(0,0,0,0.06) !important;
  transition: transform 0.3s, box-shadow 0.3s !important;
}

.review-card p {
  color: #1f2937 !important;
  font-size: 1rem;
  line-height: 1.6;
}

.review-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.12) !important;
}
</style>
