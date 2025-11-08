<script setup>
import { useSettingsStore } from '@/stores/settings'
import { useI18n } from 'vue-i18n'

const settings = useSettingsStore()
const { locale } = useI18n()
const langs = ['ua', 'en']

function setLang(lang) {
  settings.setLocale(lang)

  locale.value = lang
}
</script>

<template>
  <div class="flex items-center gap-2">
    <button
      v-for="lang in langs"
      :key="lang"
      @click="setLang(lang)"
      :class="['px-2 py-1 rounded', settings.locale === lang ? 'font-bold underline' : '']"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>


