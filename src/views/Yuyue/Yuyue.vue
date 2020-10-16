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
       
        <mt-cell title="预约人">
        <mt-field type="text" label="" placeholder="请输入您的姓名" :attr="{maxlength:10}" v-model="name"></mt-field>
         </mt-cell>
          <mt-cell title="预约电话">
        <mt-field type="text" label="" placeholder="请输入您的电话" :attr="{maxlength:10}" v-model="tell"></mt-field>
         </mt-cell>
           <mt-cell title="预约时间">
        <mt-field type="date" label="" placeholder="Input birthday"></mt-field>
         </mt-cell>
         
         </div>
        <mt-button type="primary" @click="btn" id="btn">预约</mt-button>
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
         tell:"",
         name:"",
        };
    },
    methods:{
      btn(){
        MessageBox({
          title: '',
          message: '确认预约？',
          showCancelButton: true
        })


 

       } 
    }
}
</script>