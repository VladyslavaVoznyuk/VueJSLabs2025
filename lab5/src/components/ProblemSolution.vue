<script setup>
import Card from 'primevue/card'
</script>

<template>
  <section class="p-6">
    <h2 class="text-2xl mb-4 font-bold text-center">Чому обирають нас?</h2>

    <div class="grid sm:grid-cols-2 gap-6">

      <Card class="problem-card">
        <template #title>Проблема</template>
        <template #content>
          <p>
            Загублені дедлайни, нескінченні чати в месенджерах, незрозуміло, хто за що відповідає. Хаос у процесах призводить до вигорання команди та втрати клієнтів.
          </p>
        </template>
      </Card>

      <Card class="solution-card">
        <template #title>Рішення TaskFlow</template>
        <template #content>
          <p>
            Єдина платформа для всіх задач. Канбан-дошки, діаграми Ганта та автоматичні нагадування. Прозорість процесів та контроль на кожному етапі в один клік.
          </p>
        </template>
      </Card>

    </div>
  </section>
</template>

<style scoped>
/* Стилізація цих карток для візуального акценту TaskFlow */

:deep(.problem-card .p-card) {
  /* Червона рамка для проблеми */
  border: 1px solid #e2e8f0 !important;
  border-left: 5px solid #ef4444 !important;
}

:deep(.solution-card .p-card) {
  /* Зелена рамка для рішення */
  border: 1px solid #e2e8f0 !important;
  border-left: 5px solid #10b981 !important;
}
</style>