import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index';
import Button from '../views/button/index';
import Row from '../views/row/index';
import Popup from '../views/popup/index';
import List from '../views/list/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/row',
    name: 'Row',
    component: Row
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
