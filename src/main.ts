import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('inline-svg', InlineSvg);
app.mount('#app')
