import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { provideAuth } from './stores/authStore'

const app = createApp(App)

app.use(router)

provideAuth(app)

app.mount('#app')
