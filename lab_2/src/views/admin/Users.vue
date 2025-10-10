<template>
  <div class="users-page">
    <h2>Список користувачів</h2>

    <ul>
      <li v-for="user in users" :key="user.id" @click="openUser(user.id)" class="user-item">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'AdminUsers' })

const router = useRouter()

const users = ref([
  { id: 1, name: 'Іван Петренко', email: 'ivan@gmail.com' },
  { id: 2, name: 'Олена Ткаченко', email: 'olena@gmail.com' },
  { id: 3, name: 'Степан Бондар', email: 'stepan@gmail.com' },
])

provide('userCount', users.value.length)

const openUser = (id) => {
  router.push(`/admin/user/${id}`)
}
</script>

<style scoped>
.user-item {
  cursor: pointer;
  padding: 6px 0;
}
.user-item:hover {
  text-decoration: underline;
}
</style>
