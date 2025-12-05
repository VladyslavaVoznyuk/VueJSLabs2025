<template>
  <div class="layout-wrapper">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>

    <main class="content">
      <UContainer>
        <NuxtPage />
      </UContainer>
    </main>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Nuxt Course Blog</p>
    </footer>
  </div>
</template>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #2e3838;
  color: #c5e9f6;
  font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #1d2323;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 16px 28px;
}

.nav {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.nav a {
  color: #fcfcfc;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.2s, border-bottom 0.2s;
  padding-bottom: 4px;
}

.nav a:hover {
  color: #10b981;
  border-bottom: 2px solid #10b981;
}

.nuxt-link-exact-active {
  color: #10b981 !important;
  border-bottom: 2px solid #10b981 !important;
}

.content {
  flex: 1;
  padding: 40px 24px;
  max-width: 1024px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer {
  background: #1a1f1f;
  color: #c5e9f6;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.primary-button {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;

  transition: all 0.15s ease-in-out;

  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;

  color: #10b981;
}

.primary-button:hover {
  border-bottom-color: #10b981;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>