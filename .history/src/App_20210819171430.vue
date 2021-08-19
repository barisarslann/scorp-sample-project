<template>
  <NavigationMobile />
  <Slide right push-rotate>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
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