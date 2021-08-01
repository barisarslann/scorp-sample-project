<template>
    <h1>Contact page</h1>
    <input type="text" v-model="formData.name" placeholder="Name">
    <input type="email" v-model="formData.email" placeholder="Email">
    <input type="text" v-model="formData.phonenumber" placeholder="Phone Number">
    <!-- <input type="text" >
    <select name="countryList">
        <option v-for="country in countries" value="country.id">{{country.name}}</option>
    </select> -->
    <textarea name="message" cols="30" rows="10" v-model="formData.text"></textarea>
    <button @click="sendForm">Send</button>

</template>

<script>
import axios from 'axios'

export default {
    setup() {
        let formData = {
            name: '',
            email: '',
            phonenumber: '',
            // country_code: '',
            text: '',
        }

        function sendForm() {
            axios.post('http://localhost:8080/form', formData).then((response) => {
                console.log(response.data);
            })
        }

        return {
            formData,
            sendForm
        } 
    },
    methods: {
        login() {
        }
    },
}
</script>


<style>

</style>