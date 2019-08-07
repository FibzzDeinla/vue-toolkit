import Vue from 'vue'
import Router from 'vue-router'
import NProgress from "nprogress";

import Buttons from '../views/buttons/index.vue'
import Grids from '../views/Grids/index.vue'
import RadialMenu from '../views/RadialMenu/index.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/radial-menu',
      name: 'RadialMenu',
      component: RadialMenu,
      meta: {
          display: 'Radial Menu',
          icon: 'home',
          roles: ['admin', 'guest'],
          permissions: ['canRead', 'canExport', 'canSuspend']
      }
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons,
      meta: {
        display: 'Buttons',
        icon: 'home',
        roles: ['admin', 'guest'],
        permissions: ['canRead', 'canExport', 'canSuspend']
    }
    },
    {
      path: '/grids',
      name: 'Grids',
      component: Grids,
      meta: {
        display: 'Grids',
        icon: 'home',
        roles: ['admin', 'guest'],
        permissions: ['canRead', 'canExport', 'canSuspend']
    }
    }
  ]
})

export default router;

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});
