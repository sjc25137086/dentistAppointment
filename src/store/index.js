import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doctorid:1,
    daystarttime:1602710000000,
    dayendtime:1602730000000,
    time:'',
    userid:2
  },
  mutations: {
    times(state,payload){
      state.time=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
