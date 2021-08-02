import {createStore} from 'vuex';

export default createStore({
    state: {
        user: {},
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
        setEmail(state, data) {
            state.user.email = data
        },
        setName(state, data) {
            state.user.email = data
        }
    }
})