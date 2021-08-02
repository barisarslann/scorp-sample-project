<template>
    <h1>{{ t('Homepage') }}</h1>
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