<template>
  <div>
    <h3>Activity</h3>
    <p>Життєвий цикл активностей</p>
  </div>
</template>

<script setup>
import { onMounted, onActivated, onDeactivated } from 'vue'

defineOptions({ name: 'DashboardActivity' })

onMounted(() => console.log('Activity mounted'))
onActivated(() => console.log('Activity activated'))
onDeactivated(() => console.log('Activity deactivated'))
</script>
