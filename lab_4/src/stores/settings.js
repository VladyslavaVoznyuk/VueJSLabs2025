import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    locale: 'ua'
  }),
  actions: {
    setLocale(lang) {
      if (lang === 'ua' || lang === 'en') {
        this.locale = lang
      }
    }
  },
  persist: {
    key: 'myapp_settings',
    paths: ['locale']

  }
})
