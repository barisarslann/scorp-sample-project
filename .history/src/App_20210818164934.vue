<template>
  <div id="navigation-icon" v-if="mobileView">

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
  data: () => {
    return {
      mobileView: false,
      showNav: false
    }
  }
}

</script>

<style>
  @import url('./assets/main.css');
</style>