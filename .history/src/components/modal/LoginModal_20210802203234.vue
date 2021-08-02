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
        let name = 'baris';
        let email = 'a@a.com';
        let password = '123456';
        let lang = 'en';

        const store = useStore();
        const { locale } = useI18n({ useScope: 'global' })

        function login() {

            if(name === this.name && password === this.password) {
                
                locale.value = this.lang

                store.commit('setUser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    lang: this.lang,
                });
                console.log({name, email, password, lang});
                alert('Giriş başarılı')
                context.emit('status:close')
            } else {
                alert('Giriş başarısız');
            }
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