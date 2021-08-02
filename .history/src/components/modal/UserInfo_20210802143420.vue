<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal__login">
                <span class="modal__close-button" @click="$emit('status:close')">x</span>
                <p>{{ userInfo.name }}</p>
                <p>{{ userInfo.email }}</p>
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
})
</script>

<style>

</style>
