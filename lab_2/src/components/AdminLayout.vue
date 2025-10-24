<template>
  <div class="admin-layout">
    <aside class="sidebar-wrap">
      <slot name="sidebar">
        <Sidebar />
      </slot>
    </aside>
    <main class="main-wrap">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<style scoped>
.admin-layout {
  display: flex;
  gap: 20px;
  padding: 16px;
}
.sidebar-wrap {
  width: 240px;
}
.main-wrap {
  flex: 1;
}
</style>
