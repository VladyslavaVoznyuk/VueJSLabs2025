<script setup>
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

function copy() {
  $copyToClipboard('support@saas.com').then((ok) => {
    if (ok) {
      toast.add({ severity: 'success', summary: 'Email скопійовано!' })
    }
  })
}
</script>

<template>
  <footer class="p-6 mt-6 text-center border-top-1 border-gray-300">
    <p>© 2025 SaaS Tasker</p>

    <Button
      class="mt-2"
      label="Скопіювати email"
      icon="pi pi-copy"
      @click="copy"
    />
  </footer>
</template>
