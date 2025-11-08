<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from './stores/settings'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { t, locale } = useI18n()
const settings = useSettingsStore()

watch(
  () => settings.locale,
  (newLocale) => {
    if (newLocale && locale.value !== newLocale) {
      locale.value = newLocale
    }
  },
  { immediate: true }
)
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50 text-gray-900">
    <header class="p-4 bg-white shadow flex justify-between items-center">
      <h1 class="text-2xl font-bold">{{ t('titles.appName') }}</h1>
      <LanguageSwitcher />
    </header>

    <nav class="bg-pink-100 p-4 flex gap-4 justify-center">
      <RouterLink to="/profile" class="hover:underline">
        {{ t('menu.profile') }}
      </RouterLink>
      <RouterLink to="/products" class="hover:underline">
        {{ t('menu.products') }}
      </RouterLink>
      <RouterLink to="/cart" class="hover:underline">
        {{ t('menu.cart') }}
      </RouterLink>
    </nav>

    <main class="p-6">
      <RouterView />
    </main>

  </div>
</template>


<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #fdfdfd;
}

a {
  text-decoration: none;
  color: inherit;
}

a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
