import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import { createI18n } from './i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n()
app.use(i18n)

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

app.use(router)

app.mount('#app')
