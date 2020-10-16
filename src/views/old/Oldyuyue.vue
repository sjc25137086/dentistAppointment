<template>
    <div>
      <header>
    <mt-header title="个人中心">
        <router-link  slot="left" to="<" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header> 
      <div>
        <mt-cell title="已预约">
         <span>详细信息</span>
         </mt-cell> 
          <mt-cell title="已预约">
         <span>详细信息</span>
         </mt-cell>
          <mt-cell title="已预约">
         <span>详细信息</span>
         </mt-cell>
          <mt-cell title="已预约">
         <span>详细信息</span>
         </mt-cell>
          <mt-cell title="已预约">
         <span>详细信息</span>
         </mt-cell>
          <mt-cell title="已预约">
         <span>详细信息</span>
         </mt-cell>
          <mt-cell title="已预约">
         <span>详细信息</span>
         </mt-cell>
        <mt-button type="primary" @click="btn" id="btn">删除信息</mt-button> 
      </div>
      </div> 
</template>
<style>
#btn{
      background-color:#26a2ff;
      margin-left:40%;
      margin-top:100px
      
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