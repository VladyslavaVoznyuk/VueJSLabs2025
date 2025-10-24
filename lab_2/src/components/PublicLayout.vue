<template>
  <div class="public-layout">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 12px;
  background: #f5f5f5;
}
header a {
  margin-right: 12px;
}
</style>
