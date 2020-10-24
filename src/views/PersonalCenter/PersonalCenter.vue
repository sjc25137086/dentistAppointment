<template>
  <div>
     <!-- 顶部开始 -->
    <mt-header title="我的个人中心">
      <div slot="left" class="back">
      <router-link to="/">
      <mt-button icon="back"></mt-button>
      </router-link>
      </div>
      <div slot="right" class="shortcut" v-if="this.$store.state.vuexhui.yy_logined==0">
        <router-link to="/register">注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>
      <div slot="right" class="shortcut" v-else>
         <mt-button type="primary" @click="logout">注销</mt-button>
       </div>
      
    </mt-header>
    <!-- 顶部结束 -->
    
    <div id="parent" v-if="this.$store.state.vuexhui.yy_logined==0">
      </div>
      <div id="parent-login" v-else> 
       <div>
         <div class="avatar"><img src="../../assets/avatar.jpg" alt=""></div>
       <div class="text">
         <p>{{this.$store.state.vuexhui.username}}</p>
         <p>{{this.$store.state.vuexhui.phone}}</p>
       </div>
      </div>
    </div>
    <mt-cell title="历史预约" to="/oldyuyue" is-link></mt-cell>
    <mt-cell title="我的预约" to="/yuyue" is-link></mt-cell>
  </div>
</template>
<style scoped>
.back a{
  text-decoration: none;  
  color:#fff;
}
.shortcut a{
  display:inline-block;
  margin-left:10px;
  text-decoration: none;  
  color:#fff;
}
#parent-login,#parent{
  height: 200px;
  overflow: hidden;
}
#parent-login{
  background-image: url("../../assets/timg.jpg");
}
#parent{
  background-image: url("../../assets/timg-1.jpg");
}
.avatar>img{
  width: 100px;
  height: 100px;
}
.avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin:20px;
  float: left;
}
.text{
  height: 100px;
  line-height: 50px;
  margin-top: 20px;
  float: right;
  margin-right: 20px;
}
</style>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    logout(){
      this.$store.commit('logout');
    }
  }
}
</script>