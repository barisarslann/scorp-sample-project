import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'

const { worker } = require('./mocks/browser')
worker.start()

import { CoolSelectPlugin } from 'vue-cool-select'

import 'vue-cool-select/dist/themes/bootstrap.css'
import 'vue-cool-select/dist/themes/material-design.css'

createApp(App).use(i18n).use(router).use(CoolSelectPlugin).use(store).mount('#app')