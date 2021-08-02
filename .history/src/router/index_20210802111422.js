import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage.vue'
import ContactPage from '../components/ContactPage.vue'
import MultiSelectPage from "../components/partials/Multiselect.vue";

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
    {
        path: '/multi',
        name: 'Multiselect Page',
        component: MultiSelectPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;