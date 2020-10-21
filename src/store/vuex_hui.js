import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
  state: {
    yy_logined:localStorage.getItem("yy_logined")?localStorage.getItem("yy_logined"):0,
    username:localStorage.getItem("username")?localStorage.getItem("username"):"",
    phone:localStorage.getItem("phone")?localStorage.getItem("phone"):"",
    id:localStorage.getItem("id")?localStorage.getItem("id"):""
  },
  mutations: {
    login(state,payload){
      state.yy_logined=1;
      localStorage.setItem("yy_logined","1");
      state.username=payload.username;
      localStorage.setItem("username",payload.username);
      state.phone=payload.phone;
      localStorage.setItem("phone",payload.phone);
      state.id=payload.id;
      localStorage.setItem("id",payload.id);
    },
    logout(state){
      state.yy_logined=0;
      localStorage.removeItem('yy_logined');
      state.username="";
      localStorage.removeItem('username');
      state.phone="";
      localStorage.removeItem('phone');
      state.id="";
      localStorage.removeItem('id');
    }

  },
  actions: {
  },
  modules: {
  }
}
