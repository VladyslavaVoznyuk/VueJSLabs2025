<script setup>
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'
import AuthWrapper from '../components/AuthWrapper.vue'
import { useAuth } from '../stores/authStore'
import { useRouter, useRoute } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')

const auth = useAuth()
const router = useRouter()
const route = useRoute()

async function submit() {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Заповніть всі поля'
    return
  }
  const ok = await auth.login(email.value, password.value)
  if (ok) {
    const redirect = route.query.redirect || '/admin/dashboard'
    router.push(redirect)
  } else {
    error.value = 'Неправильні облікові дані. Для демо пароль = "password"'
  }
}
</script>

<template>
  <AuthWrapper>
    <template #header>
      <h3>Увійти</h3>
    </template>

    <BaseInput v-model="email" label="Email" placeholder="email@example.com" />
    <BaseInput v-model="password" label="Пароль" type="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button @click="submit">Login</button>
  </AuthWrapper>
</template>
