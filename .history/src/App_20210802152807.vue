<template>
  <navigation />
  <router-link to="/">Homepage</router-link>
  <router-link to="/contact">Contact Page</router-link>
  <router-view />
</template>

<script>
import Navigation from './components/partials/Nav.vue';

export default {
  name: 'App',
  components: {
    navigation: Navigation,
  }
}

</script>

<style>
  @import url('./assets/main.css');
</style>