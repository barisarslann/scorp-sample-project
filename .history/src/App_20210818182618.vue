<template>
  <div id="navigation-icon" v-if="mobileView">
    <i class="fas fa-bars"></i>
  </div>
  <navigation v-if="!mobileView"/>
  <router-view />
</template>

<script>
import Navigation from './components/partials/Nav.vue';

export default {
  name: 'App',
  components: {
    navigation: Navigation,
  },
  data() {
    return {
      mobileView: true,
      showNav: false
    }
  },
  computed: {
    handleView() {
      if(window.innerWidth <= 992) {
        return this.mobileView
      } else {
        return this.mobileView = false
      }
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