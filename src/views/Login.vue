<template>
  <div>
     <!-- 顶部开始 -->
    <mt-header title="登录">
      <mt-button icon="back" @click='goback' slot="left"></mt-button>
      <router-link to="/register" slot="right" class="shortcut">没有账号？注册
      </router-link>
    </mt-header>
    <!-- 顶部结束 -->
    <!-- 表单开始 -->
    <div class="field">
      <!-- 用户名输入框 -->
      <mt-field type="text" label="手机号" placeholder="请输入手机号" :attr="{maxlength:11}" v-model="phone" @blur.native.capture="getPhone" :state="nameStatus"></mt-field>
      <!-- 密码输入框 -->
      <mt-field type="password" label="密码" placeholder="请输入密码" :attr="{maxlength:20,autocomplete:'off'}" v-model="password" @blur.native.capture="getPassword" :state="nameStatus2"></mt-field>
      <div>
      <mt-button size="small" type="default" class="forget-pwd">忘记密码？</mt-button>
      </div>
      <!-- 登录按钮 -->
      <mt-button class="btn" @click="handle" plain>登录</mt-button>
    </div>
    <!-- 表单结束 -->
  </div>
</template>
<style scoped>
.shortcut{
  text-decoration: none;
}
.btn{
  padding: 0 80px;
  left:50%;
  margin-left: -98px;
  margin-top: 20px;
}
.field{
  margin-top: 100px;
}
.forget-pwd{
  margin-left: 250px;
}
</style>
<script>
export default {
  data(){
    return{
      phone:"",
      password:"",
      nameStatus:"",
      nameStatus2:"",
    }
  },
  methods:{
    goback(){
      this.$router.go(-1);
    },
    getPhone(){
      //校验用户名
      let phoneRegExp=/^1[3-9]\d{9}$/;
      if(phoneRegExp.test(this.phone)){
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
    handle(){
      if(this.getPhone() && this.getPassword()){
        //将获取到的信息提交到web服务器
        this.axios.get(`/user/login?phone=${this.phone}&password=${this.password}`).then(res=>{
           if(res.data.code==200){
             //用户登录成功
             //提交mutations
             this.$store.commit("login");
             //将键值保存起来，防止刷新网页数据恢复到未登陆的状态
             //localStorage.setItem("yy_logined","1");
             this.$toast({
                message:"登录成功！",
                position:"middle",
                duration:"1000"
              });
              setTimeout(()=>{
                this.$router.push("/"); 
              },1000);  
              
           }else{
            this.$messagebox("登录提示","用户名或密码错误");
           }
        });
      }
    }
  }
}
</script>