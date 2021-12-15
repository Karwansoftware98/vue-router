import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import AppLink from './components/AppLink.vue'


createApp(App)
.component('AppLink' , AppLink)
.use(router)
.mount('#app')
