import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
  state: {
    yy_logined:localStorage.getItem("yy_logined")?localStorage.getItem("yy_logined"):0,
    username:"",
    phone:""
  },
  mutations: {
    login(state){
      state.yy_logined=1;
    }

  },
  actions: {
  },
  modules: {
  }
}
