import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { app } from './modules/app.module';
import { user } from './modules/user.module';
import { account } from './modules/account.module';
import { getters }  from './getters';

let store = new Vuex.Store({
  modules: {
      app,
      user,
      account
  },
  getters
})

export default store