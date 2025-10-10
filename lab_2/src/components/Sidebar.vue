<template>
  <nav>
    <ul>
      <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
      <li><router-link to="/admin/users">Users</router-link></li>
      <li><router-link to="/admin/reports">Reports</router-link></li>
    </ul>
    <div v-if="auth.user">Logged as: {{ auth.user.name || auth.user.email }}</div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script setup>
import { useAuth } from '../stores/authStore'
const auth = useAuth()
function logout() {
  auth.logout()
  location.href = '/'
}
</script>
