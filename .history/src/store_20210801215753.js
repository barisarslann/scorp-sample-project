import {createStore} from 'vuex';

export default createStore({
    state: {
        user: {},
        languages: [
            'tr',
            'en'
        ],
        currentLanguage: 'tr',
        languageData: {
            navigationBar: {
                tr: {
                    title: 'Türkçe'
                },
                en: {
                    title: 'English'
                }
            }
        },
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
        setLanguage(state, data) {
            state.currentLanguage = data
        },
    }
})