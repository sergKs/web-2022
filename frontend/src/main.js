import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import DefaultLayout from './layouts/default-layout'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('default-layout', DefaultLayout);

// подключаем axios
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost/api'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
