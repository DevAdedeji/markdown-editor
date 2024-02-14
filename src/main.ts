import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import InlineSvg from 'vue-inline-svg';
import VueMeta from 'vue-meta'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(VueMeta)
app.component('inline-svg', InlineSvg);
app.mount('#app')
