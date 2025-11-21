<script setup>
import Button from 'primevue/button'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const navLinks = [
  { label: 'Головна', id: 'home' },
  { label: 'Можливості', id: 'features' },
  { label: 'Тарифи', id: 'pricing' },
  { label: 'Контакти', id: 'contact' }
]
</script>

<template>
  <header class="p-4 flex justify-between items-center border-bottom-1 border-gray-200">
    <h2 class="text-2xl font-bold">SaaS Tasker</h2>

    <nav class="flex gap-4">
      <a
        v-for="link in navLinks"
        :key="link.id"
        @click.prevent="scrollToSection(link.id)"
        href="#"
        class="cursor-pointer"
      >
        {{ link.label }}
      </a>
    </nav>

    <Button label="Спробувати" @click="scrollToSection('contact')" />
  </header>
</template>