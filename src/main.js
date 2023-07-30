import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/taiwind.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
