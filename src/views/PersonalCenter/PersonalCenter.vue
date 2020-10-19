<template>
  <div>
     <!-- 顶部开始 -->
    <mt-header title="我的个人中心">
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部结束 -->
    
    <div id="parent">
      <div v-if="this.$store.state.vuexhui.yy_logined==0">
        <mt-button>注册</mt-button>
        <mt-button>登录</mt-button>
       </div>
       <div v-else>
         <div class="avatar"><img src="../../assets/avatar.jpg" alt=""></div>
       <div class="text">
         <p>用户名</p>
         <p>15988888888</p>
       </div>
      </div>
    </div>
    <mt-cell title="历史预约" to="/oldyuyue" is-link></mt-cell>
    <mt-cell title="我的预约" to="/yuyue" is-link></mt-cell>
  </div>
</template>
<style scoped>
#parent{
  background-image: url("../../assets/timg.jpg");
  height: 200px;
  margin-top: 5px;
  overflow: hidden;
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
  mounted(){
    console.log(localStorage.getItem("yy_logined"));
    console.log(this.$store.state.vuexhui.yy_logined);
    console.log(this.$store.state.vuexhui.username);
    console.log(this.$store.state.vuexhui.phone);
  }
}
</script>