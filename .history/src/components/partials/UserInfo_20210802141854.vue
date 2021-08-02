<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal__login">
                <span class="modal__close-button" @click="$emit('status:close')">x</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'


export default ({
    emits: [
        'status:close'
    ],
    setup() {
        let isOpenUserInfo = ref(false)

        return {
            isOpenUserInfo
        }
    },
})
</script>

<style>

</style>
