<template>
    <p>{{ languageData.title }}</p>
    <LoginModal v-if="isOpenModal" v-on:status:close="changeListener"/>
    <router-link to="/">Homepage</router-link>
    <router-link to="/contact">Contact Page</router-link>
    <!-- <select name="language" v-model="currentLanguage">
        <option v-for="lang of languages" :value="lang" :key="lang">{{ lang }}</option>
    </select> -->

    <button @click="isOpenModal ? isOpenModal = false : isOpenModal = true">Open Modal</button>

    <div class="locale-changer">
        <select v-model="locale">
  <option value="en">en</option>
  <option value="tr">tr</option>
</select>
    </div>

    <router-view />
</template>

<script>
import {useStore} from 'vuex';
import LoginModal from '../modal/LoginModal.vue';
import {watch, ref} from 'vue';
import { useI18n } from 'vue-i18n'

export default {
    components: {
        LoginModal,

    },
    setup() {
        const store = useStore();
        let languages = store.state.languages;
        let currentLanguage = ref(store.state.currentLanguage);
        let isOpenModal = ref(false);
        let languageData = store.state.languageData.navigationBar[store.state.currentLanguage]

        watch(currentLanguage, (state) => {
            store.commit('setLanguage', state);
            languageData = store.state.languageData.navigationBar[store.state.currentLanguage]
        })

        const { t, locale } = useI18n({ useScope: 'global' })

        locale.value = 'en'

        return {
            languages,
            currentLanguage,
            languageData,
            isOpenModal,
            t,
            locale
        }
    },
    methods: {
        changeListener() {
            this.isOpenModal = false
        }
    }
}
</script>