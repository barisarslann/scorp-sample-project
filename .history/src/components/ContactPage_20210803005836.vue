<template>
    <div class="container contact-page">
        <h1>{{ t('Contact.title') }}</h1>
        <div class="contact-form">
            <input type="text" v-model="nameComp" placeholder="Name">
            <input type="email" v-model="emailComp" placeholder="Email">
            <input type="text" v-model="formData.phonenumber" placeholder="Phone Number">
            <textarea name="message" v-model="formData.text" placeholder="Message" rows="1"></textarea>
            <input type="text" v-model="search" @click="openCountryList">
            <ul class="country-list" v-if="changeOpenCountryList">
                <li v-for="country in searchedCountry" @click="selectCountry(country.id); changeOpenCountryList = false" :key="country.id" class="country-list-item">{{ country.name }}</li>
            </ul>
            <button @click="sendForm">Send</button>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'

export default {
    setup() {
        let formData = {
            name: '',
            email: '',
            phonenumber: '',
            text: '',
            country_code: ''
        }
        let changeOpenCountryList = ref(false)
        let search = ref('')
        let searchedCountry = ref([])

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
            if(!search) {
                return []
            }
            return countryList.filter((country) => {
                return country.name.toLowerCase().indexOf(search.toLowerCase()) == 0
            })
        }

        function selectCountry(id) {
            let country = countryList.filter((country) => {
                return country.id == id
            })[0]
            search.value = country.name
            formData.country_code = country.id
        }

        function openCountryList() {
            this.changeOpenCountryList = true;
        }

        watch(search, (newValue) => {
            searchedCountry.value = filterCountry(newValue)
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
            emailComp,
            nameComp,
            search,
            searchedCountry,
            selectCountry,
            openCountryList,
            changeOpenCountryList
        }
    },
}
</script>


<style>

    @import url('../assets/ContactPage.css');

</style>