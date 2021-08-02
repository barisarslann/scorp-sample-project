import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'
import VueNextSelect from 'vue-next-select'

const { worker } = require('./mocks/browser')
worker.start()

const app = createApp({})
app.component('vue-select', VueNextSelect)


createApp(App).use(i18n).use(router).use(store).mount('#app')