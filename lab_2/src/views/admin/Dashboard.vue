<script setup>
import { ref } from 'vue'
import DashboardOverview from './DashboardOverview.vue'
import DashboardActivity from './DashboardActivity.vue'

const current = ref('overview')
</script>

<template>
  <div>
    <h2>Dashboard</h2>
    <div class="tabs">
      <button @click="current = 'overview'">Overview</button>
      <button @click="current = 'activity'">Activity</button>
    </div>

    <KeepAlive include="DashboardOverview" :max="1">
      <component :is="current === 'overview' ? DashboardOverview : DashboardActivity" />
    </KeepAlive>
  </div>
</template>
