import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Store from './store/index.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Veevalidate from 'vee-validate'
import App from './App.vue'
import { router } from './router'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)
// Vue.use(Veevalidate)
new Vue({
  router,
  Store,
  render: h => h(App),
}).$mount('#app')
