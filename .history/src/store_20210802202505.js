import {createStore} from 'vuex';

export default createStore({
    state: {
        user: {},
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
    }
})