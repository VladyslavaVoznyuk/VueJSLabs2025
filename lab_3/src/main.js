import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/variables.css'
import './styles/global.css'


const app = createApp(App)


app.use(router)


const savedTheme = localStorage.getItem('theme') || 'light'
if (savedTheme === 'dark') document.documentElement.classList.add('theme-dark')


app.mount('#app')