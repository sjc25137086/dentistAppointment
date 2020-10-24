import Vue from 'vue'
import Vuex from 'vuex'
import doctor from './doctor.js'

import liyu from './liyu.js'
import sjc from './sjc.js'
import vuexhui from "./vuex_hui.js"
import guanli from './guanli.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    liyu,
    doctor,
    sjc,
    vuexhui,
    guanli
  }
})
