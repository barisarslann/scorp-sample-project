<template>
    <div class="container">
        <h1>{{ t('contactPage.title') }}</h1>
        <input type="text" v-model="userInfoToForm.name" placeholder="name">
        <input type="email" v-model="formData.email" placeholder="Email">
        <input type="text" v-model="formData.phonenumber" placeholder="Phone Number">
        <textarea name="message" cols="30" rows="10" v-model="formData.text"></textarea>
        <button @click="sendForm">Send</button>
    </div>

</template>

<script>
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { ref } from 'vue'

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
        let userInfoToForm = ref(store.state.user)

        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local'
        })

        return {
            formData,
            sendForm,
            t,
            userInfoToForm
        }
    },
}
</script>


<style>
</style>