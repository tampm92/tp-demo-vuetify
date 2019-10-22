<template>
  <div id="app">
    <component :is="layoutName">
      <h1>{{title}}</h1>
      <router-view></router-view>
    </component>
    <loading :active.sync="isLoading" :is-full-page="true" background-color="#495057"/>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import config from './config'

export default {
  name: 'app',
  components: {
    Loading
  },
  data() {
    return {
      title: config.appTitle
    }
  },
  computed: {
    layoutName () {
      return this.$store.getters.layoutName
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
