<template>
    <div>
      <header>
    <mt-header title="预约记录">
        <router-link  slot="left" to="/personalCenter" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header> 
       <img src="../../assets/yachi.jpg" alt="" id="img">
      <div>
       <img src="../../assets/shijian.png" alt="">
        <mt-cell title="已预约" to="/message">
         <span>编号018--详细信息</span>
         </mt-cell> 
          <mt-cell title="已预约" to="/message">
         <span>编号016--详细信息</span>
         </mt-cell>
          <mt-cell title="已预约" to ="/message">
         <span>编号015--详细信息</span>
         </mt-cell>
          <mt-cell title="已预约" to="/message">
         <span>编号012--详细信息</span>
        
         </mt-cell>
          <mt-cell title="已预约" to="/message">
         <span>编号010--详细信息</span>
         </mt-cell>
          <mt-cell title="已预约" to ="/message">
         <span>编号030--详细信息</span>
         </mt-cell>
          <mt-cell title="已预约" to ="/message">
         <span>编号020--详细信息</span>
         </mt-cell>
        <mt-button type="primary" @click="btn" id="btn">删除信息</mt-button> 
      </div>
      </div> 
</template>
<style>
#btn{
      background-color:#26a2ff;
      margin-left:40%;
      margin-top:80px
      
  }
#img{
  width: 100%;
}
  
</style>
<script>
 import { MessageBox } from 'mint-ui';

export default {
    data(){
        return{

        };
    },
    methods:{
       btn(){
        MessageBox({
          title: '',
          message: '确认删除？',
          showCancelButton: true
        })


 

       } 
    }
}
</script>