import { createApp } from 'vue'
import './assets/main.scss'
import App from './App.vue'  
import { vuetify, FontAwesomeIcon } from './libraries/library.js';
import router from './router/routes'
import store from './store/store.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(vuetify)
.use(store)
.use(router).mount('#app')
