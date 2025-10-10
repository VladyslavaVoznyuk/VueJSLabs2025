<template>
  <div>
    <h3>Overview</h3>
    <p>Цей компонент демонструє onMounted/onActivated/onDeactivated</p>
  </div>
</template>

<script setup>
import { onMounted, onActivated, onDeactivated } from 'vue'

defineOptions({ name: 'DashboardOverview' })

onMounted(() => console.log('Overview mounted'))
onActivated(() => console.log('Overview activated'))
onDeactivated(() => console.log('Overview deactivated'))
</script>
