import Vue from 'vue';
import VueRouter from 'vue-router';
import RandomString from 'randomstring';

import App from './App.vue';
import Keyboard from './components/Keyboard.vue';
import Key from './components/Key.vue'
import Panel from './components/Panel.vue'

Vue.use(VueRouter);

var id = RandomString.generate(6);
const routes = [
  {
    path: '/',
    redirect: '/user/'.concat(id)
  },
  {
    path: '/user/:id',
    component: Keyboard,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
