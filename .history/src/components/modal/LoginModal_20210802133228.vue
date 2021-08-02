<template>
    <div class="modal">
        <div class="modal-content">
            <h1>Login</h1>
            <div class="modal__login">
                <input type="text" placeholder="Name" v-model="name">
                <input type="email" placeholder="Email" v-model="email">
                <input type="password" placeholder="Password" v-model="password">
                <select name="locale" v-model="locale">
                    <option value="tr">TR</option>
                    <option value="en">EN</option>
                </select>
            </div>
            <button @click="login">Login</button>
            <span class="modal__close-button" @click="$emit('status:close')">x</span>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
    emits: [
        'status:close'
    ],
    setup(props, context) {
        let name = 'baris';
        let email = 'a@a.com';
        let password = '123456';
        let locale = '';

        const store = useStore();

        function login() {

            if(name === this.name && password === this.password) {
                console.log({name, email, password, locale});
                store.commit('setUser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    locale: this.locale,
                });
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
            locale,
            login
        }
    },
}

</script>

<style>
    @import url('../../assets/LoginModal.css');
</style>