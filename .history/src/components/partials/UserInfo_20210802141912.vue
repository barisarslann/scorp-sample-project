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


export default ({
    emits: [
        'status:close'
    ],
    setup() {
    },
})
</script>

<style>

</style>
