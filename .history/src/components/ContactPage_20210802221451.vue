<template>
    <div class="container">
        <h1>{{ t('Contact.title') }}</h1>
        <input type="text" v-model="nameComp" placeholder="name">
        <input type="email" v-model="emailComp" placeholder="Email">
        <input type="text" v-model="formData.phonenumber" placeholder="Phone Number">
        <textarea name="message" v-model="formData.text"></textarea>
        <input type="text" v-model="search">
        <div>
            <p v-for="country of searchedCountry" :key="country.id">{{ country.name }}</p>
        </div>
        <button @click="sendForm">Send</button>
    </div>

</template>

<script>
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { computed, watch } from 'vue'

export default {
    setup() {
        let formData = {
            name: '',
            email: '',
            phonenumber: '',
            text: '',
        }
        let search = ''
        let searchedCountry = []

        const countryList = [
            { id: "TR", name: "Turkey" },
            { id: "US", name: "United States of America" },
            { id: "GB", name: "United Kingdom" },
            { id: "DE", name: "Germany" },
            { id: "SE", name: "Sweden" },
            { id: "KE", name: "Kenya" },
            { id: "BR", name: "Brazil" },
            { id: "ZW", name: "Zimbabwe" }
        ]

        function filterCountry(search) {
            return countryList.filter((country) => {
                return country.name.indexOf(search) == 0
            })
        }

        

        watch(search, (newValue) => {
            searchedCountry = filterCountry(newValue)
            console.log(newValue);
        })

        function sendForm() {
            if(store.state.user.email) {
                formData.email = store.state.user.email
                formData.name = store.state.user.name
            }
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
                    return store.state.user.email
                }

                return formData.email
            },
            set: val => {
                formData.email = val
                if(store.state.user.name) {
                    store.commit('setEmail', val)
                }
            }
        })
        const nameComp = computed({
            get: () => {
                if (store.state.user.name) {
                    return store.state.user.name
                }

                return formData.name
            },
            set: val => {
                formData.name = val
                if(store.state.user.name) {
                    store.commit('setName', val)
                }
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
            emailComp,
            nameComp,
            search,
            searchedCountry
        }
    },
}
</script>


<style>

    @import url('../assets/ContactPage.css');

</style>