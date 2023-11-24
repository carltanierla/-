import { createApp } from 'vue'
import './assets/main.scss'
import App from './App.vue'  
import { vuetify, FontAwesomeIcon } from './libraries/library.js';
import router from './router/routes'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(vuetify)
.use(router).mount('#app')
