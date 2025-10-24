<template>
  <div class="auth-wrapper">
    <header>
      <slot name="header"><h2>Вхід / Реєстрація</h2></slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">
        <p>© My Demo</p>
      </slot>
    </footer>
  </div>
</template>

<style scoped>
.auth-wrapper {
  max-width: 420px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>
