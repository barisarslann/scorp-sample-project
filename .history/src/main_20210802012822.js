import Vue, { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'
import vSelect from 'vue-select'


const { worker } = require('./mocks/browser')
worker.start()


Vue.component('v-select', vSelect)


createApp(App).use(i18n).use(router).use(store).mount('#app')