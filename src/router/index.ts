import Vue from 'vue'
import Router from 'vue-router'
import NProgress from "nprogress";

import MLabel from '../views/mlabel/index.vue'
import Buttons from '../views/buttons/index.vue'
import Grids from '../views/grids/index.vue'
import RadialMenu from '../views/radialMenu/index.vue'
import KendoDropList from '../views/kendodroplist/index.vue'
import Switchery from '../views/switchery/index.vue'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/mlabel',
      name: 'MLabel',
      component: MLabel,
      meta: {
          display: 'MLabel',
          icon: 'home'
      }
    },
    {
      path: '/',
      name: 'Buttons',
      component: Buttons,
      meta: {
          display: 'MButton',
          icon: 'home'
      }
    },
    {
      path: '/radial-menu',
      name: 'RadialMenu',
      component: RadialMenu,
      meta: {
          display: 'Radial Menu',
          icon: 'home'
      }
    },
    {
      path: '/grids',
      name: 'KendoFlexGrid',
      component: Grids,
      meta: {
          display: 'KendoFlexGrid',
          icon: 'home'
      }
    },
    {
      path: '/kendodroplist',
      name: 'KendoDropList',
      component: KendoDropList,
      meta: {
          display: 'KendoDropList',
          icon: 'home'
      }
    },
    {
      path: '/switchery',
      name: 'Switchery',
      component: Switchery,
      meta: {
          display: 'Switchery',
          icon: 'home'
      }
    },
  ]
})

export default router;

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});
