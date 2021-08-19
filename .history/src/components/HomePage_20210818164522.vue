<template>
    <div class="container">
        <div class="row">
            <h1>{{ t('Homepage.title') }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate harum, autem, non sequi rerum sint dolorum nam asperiores esse laudantium quis culpa. Suscipit quia odit delectus minima, doloremque accusamus minus.</p>
        </div>
    </div>  
</template>

<script>
import { useI18n } from 'vue-i18n'

export default({
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local'
        })

        return {
            t
        }
    },
})
</script>

<style scoped>

</style>