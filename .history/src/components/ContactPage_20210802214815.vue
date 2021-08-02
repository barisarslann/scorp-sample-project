<template>
    <div class="container">
        <h1>{{ t('Contact.title') }}</h1>
        <input type="text" v-model="userInfoToFormName" placeholder="name">
        <input type="email" v-model="emailComp" placeholder="Email">
        <input type="text" v-model="formData.phonenumber" placeholder="Phone Number">
        <textarea name="message" v-model="formData.text"></textarea>
        <button @click="sendForm">Send</button>
    </div>

</template>

<script>
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup() {
        let formData = {
            name: '',
            email: '',
            phonenumber: '',
            text: '',
        }

        function sendForm() {
            axios.post('http://localhost:8080/form', formData).then((response) => {
                console.log(response.data);
            })
        }

        const store = useStore()
        let userInfoToFormName = computed(() => store.state.user.name)
        let userInfoToFormEmail = computed(() => store.state.user.email)

        const emailComp = computed({
            get: () => {
                if (store.state.user.name) {
                    return store.user.email
                }

                return email
            },
            set: val => {
                email = val
                store.commit('setEmail', val)
            }
        })

        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local'
        })

        return {
            formData,
            sendForm,
            t,
            userInfoToFormName,
            userInfoToFormEmail,
            emailComp
        }
    },
}
</script>


<style>

    @import url('../assets/ContactPage.css');

</style>