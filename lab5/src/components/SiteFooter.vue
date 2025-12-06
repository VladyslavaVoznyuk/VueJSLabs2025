<script setup>
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'
import { getCurrentInstance } from 'vue' 

const toast = useToast()

const { proxy } = getCurrentInstance()

function copy() {
  const emailToCopy = 'support@saas.com'

  proxy.$copyToClipboard(emailToCopy)
    .then((ok) => {
      if (ok) {
        toast.add({
          severity: 'success',
          summary: 'Успіх',
          detail: 'Email скопійовано в буфер обміну!',
          life: 3000
        })
      } else {
        toast.add({
          severity: 'error',
          summary: 'Помилка',
          detail: 'Неможливо скопіювати.',
          life: 3000
        })
      }
    })

    .catch(() => {
      toast.add({
        severity: 'error',
        summary: 'Помилка',
        detail: 'Функція копіювання недоступна.',
        life: 3000
      })
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