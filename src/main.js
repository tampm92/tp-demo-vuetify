import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Layout from './layouts/layout'
import DefaultLayout from './layouts/default-layout.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.component('layout', Layout)
Vue.component('default-layout', DefaultLayout)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
