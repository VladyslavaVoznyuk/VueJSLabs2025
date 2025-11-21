<script setup>
import Card from 'primevue/card'
</script>

<template>
  <section class="p-6 grid sm:grid-cols-2 gap-6">

    <Card>
      <template #title>Проблема</template>
      <template #content>
        <p>
          Команди витрачають багато часу на хаотичне планування, переписки та пошук інформації.
        </p>
      </template>
    </Card>

    <Card>
      <template #title>Рішення</template>
      <template #content>
        <p>
          SaaS Tasker об’єднує задачі, чати та файли в одному зручному інструменті.
        </p>
      </template>
    </Card>

  </section>
</template>