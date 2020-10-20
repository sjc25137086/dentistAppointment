<template>
    <div>
      <header>
    <mt-header title="我的预约">
       <router-link  slot="left" to="/personalCenter" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>
       <div>
     <mt-swipe :auto="6000">
  <mt-swipe-item><img src="../../assets/yachi.jpg" alt="" id="img"></mt-swipe-item>
  <mt-swipe-item>  <img src="../../assets/yamei.jpg" alt="" id="img"></mt-swipe-item>
        </mt-swipe>
       </div>
        <mt-cell title="编号" to="undetail">
         <span>查看{{id}}号详情</span>
         </mt-cell> 
          
         
      
     <mt-button type="primary" @click="btn" id="btn">正在预约中</mt-button>
  
</div>
   
</template>
<style scoped>
   #img{
    width:100%;
  } 
 

 
  .aa{width: 100%;
background-color:rgb(159, 236, 152);}
  .bb{
    background-color:whitesmoke;
  }
 #abc{
  margin-bottom:40px ;
  margin-top: 20px;
  margin-left:5% ;
 }
 #ab{
   margin-left:80%;

 }
   .mint-swipe {
        height: 80px;
    }
 
 #btn{margin-left: 40%;
 margin-top:20px ;}
</style>
<script>
 import { MessageBox } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data(){
        return{
              id:"",
            
        };
    },
    methods:{
       btn(){
        MessageBox({
          title: '您的预约已受理,请根据时间准时前来',
          message: '确认？',
          showCancelButton: true
        })


 

       } 
    },
     mounted(){
        //this.$router,路由
        //this.$route,路由请求信息
        //1.获取地址栏中的ID
        let id = this.$route.params.id;
        //2.向WEB服务器发送请求
        this.axios.get('/user/doingforward?uid=1').then(res=>{
             this.id = res.data.result
          this.id = res.data.result[0].id;
        });
      }
     }
     
</script>
