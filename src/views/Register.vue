<template>
  <div>
    <!-- 顶部开始 -->
    <mt-header title="注册">
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right" class="shortcut">已有账号？请登录
      </router-link>
    </mt-header>
    <!-- 顶部结束 -->
    <!-- 注册表单开始 -->
    <div class="field">
      <!-- 用户名输入框 -->
      <mt-field type="text" label="用户名" placeholder="请输入用户名" :attr="{maxlength:15}" v-model="username" @blur.native.capture="getName" :state="nameStatus"></mt-field>
      <!-- 密码输入框 -->
      <mt-field type="password" label="密码" placeholder="请输入密码" :attr="{maxlength:20,autocomplete:'off'}" v-model="password" @blur.native.capture="getPassword" :state="nameStatus2"></mt-field>
      <!-- 确认密码输入框  -->
      <mt-field type="password" label="确认密码" placeholder="请再次输入密码" :attr="{maxlength:20,autocomplete:'off'}" v-model="conpassword" @blur.native.capture="getConPassword" :state="nameStatus3"></mt-field>
      <!-- 验证码输入 -->
      <mt-field type="text" label="验证码" placeholder="请输入验证码">
         <button>发送验证码</button>
      </mt-field>
      <!-- 注册按钮 -->
      <mt-button class="btn" @click="handle" plain>注册</mt-button>
    </div>
    <!-- 注册表单结束 -->
  </div>
</template>
<style scoped>
.shortcut{
  text-decoration: none;
}
.field{
  margin-top: 100px;
}
.btn{
  padding: 0 80px;
  left:50%;
  margin-left: -98px;
  margin-top: 20px;
}
</style>
<script>
export default {
  data(){
    return{
      username:"",
      password:"",
      conpassword:"",
      nameStatus:"",
      nameStatus2:"",
      nameStatus3:""
    }
  },
  methods:{
    getName(){
      //校验用户名
      let usernameRegExp=/^\w{6,15}$/;
      if(usernameRegExp.test(this.username)){
         this.nameStatus="success";
         return true;
      }else{
        //简洁的短消息提示框
        this.nameStatus="error";
        this.$toast({
          message:"请输入合法的用户名",
          position:"middle",
          duration:"2000"
          });
          return false;
      }
    },
   getPassword(){
     let passwordReg=/^\w{6,20}$/;
     if(passwordReg.test(this.password)){
        this.nameStatus2="success";
        return true;
     }else{
        this.nameStatus2="error";
        //console.log("用户名非法");
        //简洁的短消息提示框
        this.$toast({
          message:"密码为必填项",
          position:"middle",
          duration:"2000"
          });
          return false;
     }
   },
   getConPassword(){
      if(this.password==this.conpassword){
        this.nameStatus3="success";
        return true;
      }else{
        this.nameStatus3="error";
        this.$toast({
          message:"两次输入的密码不一致，请重新输入",
          position:"middle",
          duration:"2000"
        });
        return false;
      }
   },
    handle(){
      if(this.getName() && this.getPassword() && this.getConPassword()){
        //将获取到的信息提交到web服务器
        this.axios.post("/register",`username=${this.username}&password=${this.password}`).then(res=>{
          if(res.data.code==1){
            this.$router.push("/");
          }else{
            this.$messagebox("注册提示","用户名已被占用");
          }
        });
      }
    }
  }
}
</script>
