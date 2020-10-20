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

        <div>
     <mt-swipe :auto="2000">
  <mt-swipe-item><img src="../../assets/yamei.jpg" alt="" id="img"></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/yachi.jpg" alt="" id="img">  </mt-swipe-item>
        </mt-swipe>
       </div>
         <mt-cell title="预约中" to="undetail">
         <span>编号010--查看详情</span>
         </mt-cell> 
         
        <mt-cell title="预约中" to="undetail">
         <span>编号010--查看详情</span>
         </mt-cell> 
         
        <mt-cell title="预约中" to="undetail">
         <span>编号010--查看详情</span>
         </mt-cell> 
         
        <mt-cell title="预约中" to="undetail">
         <span>编号010--查看详情</span>
         </mt-cell> 
          <mt-cell title="预约中" to="undetail">
         <span>编号010--查看详情</span>
         </mt-cell> 
         
     <mt-button type="primary" @click="btn" id="btn">取消预约</mt-button>
  
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

        };
    },
    methods:{
       btn(){
        MessageBox({
          title: '',
          message: '确认取消？',
          showCancelButton: true
        })


 

       } 
    }
}
</script>