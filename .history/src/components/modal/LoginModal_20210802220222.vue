<template>
    <div class="modal">
        <div class="modal-content">
            <h1>Login</h1>
            <div class="modal__login">
                <input type="text" placeholder="Name" v-model="name">
                <input type="email" placeholder="Email" v-model="email">
                <input type="password" placeholder="Password" v-model="password">
                <select name="lang" v-model="lang">
                    <option value="en">EN</option>
                    <option value="tr">TR</option>
                </select>
            </div>
            <button @click="login">Login</button>
            <span class="modal__close-button" @click="$emit('status:close')">x</span>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
    emits: [
        'status:close'
    ],
    setup(props, context) {
        let name = ref('');
        let email = ref('');
        let password = ref('');
        let lang = ref('en');

        const store = useStore();
        const { locale } = useI18n({ useScope: 'global' })

        function login() {
            if(!name.value || email.value) {
                alert('Bilgileri eksik girdiniz.')
                    return 
            }
            locale.value = lang.value

            store.commit('setUser', {
                name: name.value,
                email: email.value,
                password: password.value,
                lang: lang.value,
            });
            console.log({name:name.value, email:email.value, password:password.value, lang:lang.value});
            context.emit('status:close')
        }

        return {
            name,
            email,
            password,
            lang,
            login
        }
    },
}

</script>

<style>
    @import url('../../assets/LoginModal.css');
</style>