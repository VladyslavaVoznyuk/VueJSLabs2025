<script setup>
import Card from 'primevue/card'
</script>

<template>
  <section class="p-6 grid sm:grid-cols-3 gap-6">

    <Card>
      <template #title>Швидкий старт</template>
      <template #content>
        <p>Реєстрація за 30 секунд</p>
      </template>
    </Card>

    <Card>
      <template #title>Аналітика</template>
      <template #content>
        <p>Відстежуйте виконання задач у реальному часі</p>
      </template>
    </Card>

    <Card>
      <template #title>Хмарні дані</template>
      <template #content>
        <p>Дані завжди доступні</p>
      </template>
    </Card>

  </section>
</template>