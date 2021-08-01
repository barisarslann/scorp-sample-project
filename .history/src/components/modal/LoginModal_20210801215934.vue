<template>
    <div class="modal">
        <div class="modal-content">
            <h1>Login</h1>
            <div class="modal__login">
                <input type="text" placeholder="Name" v-model="username">
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
    setup() {
        let users = [
            {
                username: 'baris',
                email: 'a@a.com',
                password: '123456',
                locale: 'tr'
            }
        ]

        const store = useStore();

        function login() {
            store.commit('setUser', {
                name: this.username,
                email: this.email,
                password: this.password,
                locale: this.locale,
            });
        }

        return {
            username,
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