<template>
    <header id="header">
    <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </header>
</template>

<script>
// import LoginModal from '../modal/LoginModal.vue';
// import UserInfo from '../modal/UserInfo.vue';
// import { ref, computed } from 'vue';
// import { useI18n } from 'vue-i18n'
// import { useStore } from 'vuex'

// export default {
//     components: {
//         LoginModal,
//         UserInfo
//     },
//     setup() {
//         let isOpenModal = ref(false);
//         let isOpenUserInfo = ref(false);

//         const { t, locale } = useI18n({ useScope: 'global' })
//         locale.value = 'en'

//         const store = useStore()
//         let user = ref(store.state.user)

//         console.log(user);

//         let userCheck = computed(() => store.state.user.name)
        
//         return {
//             isOpenModal,
//             t,
//             locale,
//             isOpenUserInfo,
//             user,
//             userCheck
//         }
//     },
//     methods: {
//         changeListener() {
//             this.isOpenModal = false
//         },
//         changeUserInfoModal() {
//             this.isOpenUserInfo = false
//         }
//     },
// }
</script>

<style scoped>
    @import url('../../assets/NavMobile.css');
</style>