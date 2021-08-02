<template>
    <header>
        <LoginModal v-if="isOpenModal" v-on:status:close="changeListener"/>
        <UserInfo v-if="isOpenUserInfo" v-on:status:close="changeUserInfoModal"/>
        <router-link to="/">Homepage</router-link>
        <router-link to="/contact">Contact Page</router-link>

        <button @click="isOpenModal ? isOpenModal = false : isOpenModal = true">Open Modal</button>
        <button @click="isOpenUserInfo ? isOpenUserInfo = false : isOpenUserInfo = true">Open User Info</button>
        <div class="locale-changer">
            <select v-model="locale">
                <option value="en">en</option>
                <option value="tr">tr</option>
            </select>
        </div>
        
    </header>
</template>

<script>
import LoginModal from '../modal/LoginModal.vue';
import UserInfo from '../modal/UserInfo.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

export default {
    components: {
        LoginModal,
        UserInfo
    },
    setup() {
        let isOpenModal = ref(false);
        let isOpenUserInfo = ref(false);

        const { t, locale } = useI18n({ useScope: 'global' })
        locale.value = 'en'

        return {
            isOpenModal,
            t,
            locale,
            isOpenUserInfo
        }
    },
    methods: {
        changeListener() {
            this.isOpenModal = false
        },
        changeUserInfoModal() {
            this.isOpenUserInfo = false
        }
    }
}
</script>