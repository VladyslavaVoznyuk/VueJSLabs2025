import { createI18n as _createI18n } from 'vue-i18n'
import ua from './locales/ua.json'
import en from './locales/en.json'


export function createI18n() {
  const i18n = _createI18n({
    legacy: false,
    locale: 'ua',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: { ua, en }
  })


  const { global } = i18n
  global.capitalize = (str) => {
    if (!str) return ''
    return String(str).charAt(0).toUpperCase() + String(str).slice(1)
  }
  global.upper = (str) => (str || '').toUpperCase()
  global.lower = (str) => (str || '').toLowerCase()


  global.reverse = (str) => (str || '').split('').reverse().join('')


  return i18n
}