<template>
    <header id="header">
    <nav class="navbar mynavbar navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="logo" href="index.html"><img src="images/logo.png" alt=""></a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/home"><a>Home</a></router-link></li>
             <li><router-link to="/about"><a>About Us</a></router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>
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