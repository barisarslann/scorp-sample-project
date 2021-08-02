import {createStore} from 'vuex';

export default createStore({
    state: {
        user: {},
        contactPage: {
            title: "Contact page"
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
    }
})