<template>
  
    <Slide right v-if="handleView">
      <!-- <NavigationMobile /> -->
      <ul>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
        <li><a href="#">Hello World!</a></li>
      </ul>
    </Slide>
    <Navigation />
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
      width: 100%;
    }
  }
</style>