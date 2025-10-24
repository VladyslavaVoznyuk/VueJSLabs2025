<script setup>
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'
import AuthWrapper from '../components/AuthWrapper.vue'
import { useAuth } from '../stores/authStore'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const error = ref('')

const auth = useAuth()
const router = useRouter()

async function submit() {
  error.value = ''
  if (!name.value || !email.value || !password.value) {
    error.value = 'Заповніть всі поля'
    return
  }
  if (password.value !== confirm.value) {
    error.value = 'Паролі не співпадають'
    return
  }
  const res = await auth.register({
    name: name.value,
    email: email.value,
    password: password.value,
  })
  if (res.error) {
    error.value = res.error
  } else {
    router.push('/admin/dashboard')
  }
}
</script>

<template>
  <AuthWrapper>
    <template #header><h3>Реєстрація</h3></template>

    <BaseInput v-model="name" label="Ім'я" />
    <BaseInput v-model="email" label="Email" />
    <BaseInput v-model="password" type="password" label="Пароль" />
    <BaseInput v-model="confirm" type="password" label="Підтвердьте пароль" />
    <div v-if="error" class="error">{{ error }}</div>
    <button @click="submit">Register</button>
  </AuthWrapper>
</template>
