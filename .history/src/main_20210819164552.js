import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const { worker } = require('./mocks/browser')
worker.start()

createApp(App).use(BootstrapVue).use(IconsPlugin).use(i18n).use(router).use(store).mount('#app')