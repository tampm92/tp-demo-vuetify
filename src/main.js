import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Layout from './layouts/layout'
import DefaultLayout from './layouts/default-layout.vue'

Vue.component('layout', Layout)
Vue.component('default-layout', DefaultLayout)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
