import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
  state: {
    yy_logined:localStorage.getItem("yy_logined")?localStorage.getItem("yy_logined"):0
  },
  mutations: {
    login(){
      state.yy_logined=1;
    }
  },
  actions: {
  },
  modules: {
  }
}
