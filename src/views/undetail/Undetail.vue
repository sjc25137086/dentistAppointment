<template>
    <div>
      <header>
    <mt-header title="正在进行的预约">
        <router-link  slot="left" to="/personalCenter" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header> 
      <div>
      <mt-cell title="预约人">
      <span>管丽</span>
         </mt-cell>
           <mt-cell title="性别">
      <span>男</span>
         </mt-cell>
           <mt-cell title="年龄">
      <span>30</span>
         </mt-cell>
          <mt-cell title="预约电话">
         18958686689
         </mt-cell>
           <mt-cell title="预约时间">
       <span>2020-10-20</span>
         </mt-cell>
              <mt-cell title="医生编号">
       <span>0050</span>
         </mt-cell>
              <mt-cell title="预约编号">
       <span>010</span>
         </mt-cell>
             <mt-cell title="用户编号">
       <span>0010</span>
         </mt-cell>
         </div>
        <mt-button type="primary" @click="btn" id="btn">正在预约中</mt-button>
      </div> 
      
</template>
  <style>
  #btn{
      background-color:#26a2ff;
      margin-left:40%;
      margin-top:80px
      
  }
  </style>
<script>
 import { MessageBox } from 'mint-ui';

export default {
    data(){
       
        return{
         tell:"",
         name:"",
        };
    },
    methods:{
      btn(){
        MessageBox({
          title: '您的预约已受理，请您合理安排时间前来挂号',
          message: '确认预约？',
          showCancelButton: true
        })


 

       } 
    }
}
</script>