<template>
  <div id="navigation-icon" v-if="mobileView">
    <i class="fas fa-bars"></i>
  </div>
  <Navigation v-if="!mobileView"/>
  <router-view />
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
  computed: {
    handleView() {
      return this.mobileView = window.innerWidth <= 992;
    }
  }
}

</script>

<style>
  @import url('./assets/main.css');
  #navigation-icon {
    padding: 10px 10px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  i {
    font-size: 2rem;
  }
</style>