import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'
import { CoolSelectPlugin } from 'vue-cool-select'

const { worker } = require('./mocks/browser')
worker.start()

createApp(App).use(i18n).use(router).use(store).use(CoolSelectPlugin).mount('#app')