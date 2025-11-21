<script setup>
import Card from 'primevue/card'
</script>

<template>
  <section class="p-6">
    <h2 class="text-2xl mb-4 font-bold text-center">Відгуки</h2>

    <div class="grid sm:grid-cols-2 gap-6">

      <Card>
        <template #content>
          <p>
            “Завдяки SaaS Tasker наша команда зекономила до 20 годин на тиждень!”
          </p>
        </template>
        <template #footer>
          <p class="font-bold mt-3">Андрій</p>
        </template>
      </Card>

      <Card>
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