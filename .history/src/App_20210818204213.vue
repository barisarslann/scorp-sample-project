<template>
  <NavigationMobile />
  <div class="all-content" :class="{'open':showNav}">
    <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
      <i class="fas fa-bars"></i>
    </div>
    <Navigation v-if="!mobileView"/>
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
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  created() {
     this.handleView();
  },
  // computed: {
  //   handleView() {
  //     return this.mobileView = window.innerWidth <= 992;
  //   }
  // }
}

</script>

<style>
  @import url('./assets/main.css');
  #navigation-icon {
    padding: 10px 10px 20px;
    cursor: pointer;
  }
  i {
    font-size: 2rem;
  }
  .all-content {
    transition: 1s transform cubic-bezier(0, .12, .14, 1)
  }
  .open {
    transform: translateX(300px)
  }
</style>