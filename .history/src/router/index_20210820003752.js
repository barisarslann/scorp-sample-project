import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage.vue'
import ContactPage from '../components/ContactPage.vue'

const routes = [
    {
        path: '/vue-sample',
        name: 'Homepage',
        component: HomePage,
    },
    {
        path: '/vue-sample/contact',
        name: 'Contact',
        component: ContactPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;