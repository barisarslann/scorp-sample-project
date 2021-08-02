import {createStore} from 'vuex';

export default createStore({
    state: {
        user: {},
        contactPage: {
            title: "Contact page"
        },
        routers: {
            Homepage: {
                path: '/',
                name: 'Homepage',
                component: HomePage,
            },
            Contactpage: {
                path: '/contact',
                name: 'Contact Us',
                component: ContactPage,
            }
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
    }
})