<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal__login">
                <span class="modal__close-button" @click="$emit('status:close')">x</span>

                <ul>
                    <li>{{ userInfo.name }}</li>
                    <li>{{ userInfo.email }}</li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import { ref } from 'vue'

export default ({
    emits: [
        'status:close'
    ],
    setup() {
        const store = useStore();
        let userInfo = ref(store.state.user)

        return {
            userInfo
        }
    },
    methods: {
        
    }
})
</script>

<style>

</style>
