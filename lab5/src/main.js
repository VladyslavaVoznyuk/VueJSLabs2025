import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura'

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

import 'primeicons/primeicons.css'
import CopyToClipboardPlugin from './plugins/CopyToClipboard'

const app = createApp(App)

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(ToastService)

app.component('Card', Card)
app.component('InputText', InputText)
app.component('InputMask', InputMask)
app.component('Textarea', Textarea)
app.component('Checkbox', Checkbox)
app.component('Button', Button)
app.component('Toast', Toast)

app.mount('#app')
app.use(CopyToClipboardPlugin)