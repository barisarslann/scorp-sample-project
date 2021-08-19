<template>
  <NavigationMobile />
  <div class="all-content" :class="{'open':showNav}">
    <div id="navigation-icon" v-if="this.handleView" @click="showNav = !showNav">
      <i class="fas fa-bars" :class="{'disable':showNav}"></i>
      <i class="far fa-window-close" :class="{'disable':!showNav}"></i>
    </div>
    <Navigation v-if="!this.handleView"/>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/partials/Nav.vue';
import NavigationMobile from './components/partials/NavMobile.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    NavigationMobile
  },
  data() {
    return {
      mobileView: true,
      showNav: false
    }
  },
  // methods: {
  //   handleView() {
  //     this.mobileView = window.innerWidth <= 990;
  //   }
  // },
  // created() {
  //    this.handleView();
  // },
  computed: {
    handleView() {
      console.log(window.innerWidth);
      return window.innerWidth <= 992;
    }
  }
}

</script>

<style>
  @import url('./assets/main.css');
  #navigation-icon {
    padding: 20px 0;
    cursor: pointer;
  }
  i {
    font-size: 2rem;
  }
  .open {
    transform: translateX(300px)
  }
  .disable {
    display: none;
  }
  .enable {
    display: block;
  }
  @media (max-width: 992px) {
    .all-content {
      position: absolute;
      top: 0;
      transition: 1s transform cubic-bezier(0, .12, .14, 1);
      height: 100vh;
      background: white;
      padding: 0 10px;
    }
  }
</style>