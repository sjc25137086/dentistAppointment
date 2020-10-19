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
      <!-- 手机号输入框 -->
      <mt-field type="text" label="手机号" placeholder="请输入手机号" :attr="{maxlength:11}" v-model="phone" @blur.native.capture="getPhone" :state="nameStatus"></mt-field>
      <!-- 密码输入框 -->
      <mt-field type="password" label="密码" placeholder="请输入密码" :attr="{maxlength:20,autocomplete:'off'}" v-model="password" @blur.native.capture="getPassword" :state="nameStatus2"></mt-field>
      <!-- 确认密码输入框  -->
      <mt-field type="password" label="确认密码" placeholder="请再次输入密码" :attr="{maxlength:20,autocomplete:'off'}" v-model="conpassword" @blur.native.capture="getConPassword" :state="nameStatus3"></mt-field>
      <!-- 验证码输入 -->
      <mt-field type="text" label="验证码" placeholder="请输入验证码">
         <button :disabled="enabled" @click="getCode" v-html="text"></button>
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
      enabled:true,
      text:"获取验证码",
      phone:"",
      password:"",
      conpassword:"",
      nameStatus:"",
      nameStatus2:"",
      nameStatus3:""
    }
  },
  methods:{
    getCode(){
      let count=60;
   let timer=setInterval(()=>{
       if(count==0){
        this.enabled=false;
        this.text="获取验证码";
        clearInterval(timer);
       }else{
        this.enabled=true;
        this.text=`重新发送(${count})`;
        count--;
      }
      },1000);  
    },
    getPhone(){
      //校验手机号
      let phoneRegExp=/^1[3-9]\d{9}$/;
      if(phoneRegExp.test(this.phone)){
         this.nameStatus="success";
         this.enabled=false;
         return true;
      }else{
        //简洁的短消息提示框
        this.nameStatus="error";
        this.$toast({
          message:"请输入合法的手机号",
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
        //简洁的短消息提示框
        this.$toast({
          message:"请输入6-20位，由字母、数字、下划线组成的密码",
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
      if(this.getPhone() && this.getPassword() && this.getConPassword()){
        //将获取到的信息提交到web服务器
        this.axios.post("/user/register",`phone=${this.phone}&password=${this.password}`).then(res=>{
          if(res.data.code==200){
              this.$toast({
                message:"注册成功！",
                position:"middle",
                duration:"1000"
              });
              setTimeout(()=>{
                this.$router.push("/"); 
              },1000);  
              
          }else if(res.data.code==601){
            this.$messagebox("注册提示","手机号已被占用");
          }
        });
      }
    }
  }
}
</script>
