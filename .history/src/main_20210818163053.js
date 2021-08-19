import { createApp }, Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

Vue.component('font-awesome-icon', FontAwesomeIcon)

const { worker } = require('./mocks/browser')
worker.start()

createApp(App).use(i18n).use(router).use(store).mount('#app')