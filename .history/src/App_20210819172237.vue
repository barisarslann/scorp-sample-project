<template>
  
    <Slide right v-if="handleView" class="mobile-header">
      <!-- <NavigationMobile /> -->
      <ul>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
      </ul>
    </Slide>
    <Navigation v-if="!handleView"/>
    <router-view />
</template>

<script>
import Navigation from './components/partials/Nav.vue';
import NavigationMobile from './components/partials/NavMobile.vue';
import { Slide } from 'vue3-burger-menu'

export default {
  name: 'App',
  components: {
    Navigation,
    NavigationMobile,
    Slide
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    handleView() {
      return this.windowWidth <= 992;
    }
  }
}

</script>

<style>
  @import url('./assets/main.scss');
</style>