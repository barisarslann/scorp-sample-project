import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'
import { CoolSelectPlugin } from "vue-cool-select";

const { worker } = require('./mocks/browser')
worker.start()

// you don't need it. this is for example purposes
const theme = localStorage.getItem("current_theme") || "bootstrap";

if (theme === "bootstrap") {
  // import styles
  import("vue-cool-select/dist/themes/bootstrap.css");
} else {
  // import styles
  import("vue-cool-select/dist/themes/material-design.css");
}



createApp(App).use(i18n).use(router).use(store).use(CoolSelectPlugin).mount('#app')