<template>
    <div>
      <header>
    <mt-header title="进行中的预约">
       <router-link  slot="left" to="/personalCenter" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>
       <div>
     <mt-swipe :auto="6000">
  <mt-swipe-item><img src="../../assets/yachi.jpg" alt="" id="img"></mt-swipe-item>
  <mt-swipe-item> <img src="../../assets/yamei.jpg" alt="" id="img"></mt-swipe-item>
        </mt-swipe>
       </div>
      
     <div v-for="(value,key) of yuyue" :key="key" @click='showDetail(value.id)'>
          <mt-cell :title="value.fname" to="undetail">
        <!-- <span>{{time}}</span> -->
         </mt-cell> 
         
       </div> 
         
         
      
   
  
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
          forwardid:"",
          yuyue:[],
           time:"",
           fsex:"",
           state:""
             
       }
       
    },
    methods:{
      btn(){
        MessageBox({
          title: '您的预约已受理,确认取消？？',
          message: '确认？',
          showCancelButton: true
        })
      },
      showDetail(forwardid){//vuex中参数
      this.$store.commit('setforwardid',forwardid);
       }

    },
     mounted(){
       if(this.$store.state.vuexhui.userid==""){
          this.$router.push('/login')
        }
         //2.向WEB服务器发送请求
        this.axios.get('/user/doingforward?uid='+this.$store.state.vuexhui.userid).then(res=>{
          this.yuyue = res.data.result
          this.forwardid = res.data.result[0].id; //输出6
        });
    }
}
</script>
