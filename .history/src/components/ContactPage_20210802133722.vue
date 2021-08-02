<template>
    <h1>{{ t('contact-page.title') }}</h1>
    <p>{{ t('hello') }}</p>
    <input type="text" v-model="formData.name" placeholder="name">
    <input type="email" v-model="formData.email" placeholder="Email">
    <input type="text" v-model="formData.phonenumber" placeholder="Phone Number">
    <textarea name="message" cols="30" rows="10" v-model="formData.text"></textarea>
    <button @click="sendForm">Send</button>

</template>

<script>
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import {useStore} from 'vuex'

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

        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local'
        })

        return {
            formData,
            sendForm,
            t
        }
    },
}
</script>


<style>
</style>