import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage.vue'
import ContactPage from '../components/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomePage,
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: ContactPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;