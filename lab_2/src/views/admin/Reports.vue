<template>
  <div>
    <h2>Reports</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Назва</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in reports" :key="item.id">
          <slot name="row" :item="item">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.date }}</td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'AdminReports' })

const reports = ref([
  { id: 1, title: 'Фінансовий звіт', date: '2025-01-01' },
  { id: 2, title: 'Активність користувачів', date: '2025-02-10' },
  { id: 3, title: 'Адмін аудит', date: '2025-03-15' },
])
</script>
