import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

import App from './App.vue'
import { routes } from './routes';
import { store } from './store/store';


const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
