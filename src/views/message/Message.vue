<template>
    <div>
      <header>
    <mt-header title="个人中心">
        <router-link  slot="left" to="<" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>
         <div class="aa">
     <img src="../../assets/2.png" alt="" id="img">
     <span id="ab">Daisy</span>
         </div>
          <p id="abc">已预约详情</p>

       <div id="a">
         
      <mt-cell title="预约人">
         <span>管丽</span>
         </mt-cell> 
          <mt-cell title="预约时间">
         <span>2020-05-28</span>
         </mt-cell> 
     <mt-cell title="预约门诊">
         <span>深圳中医院龙华分院</span>
         </mt-cell> 
  
        <mt-cell title="预约人">
         <span>管丽</span>
         </mt-cell> 
          <mt-cell title="预约时间">
         <span>2020-06-28</span>
         </mt-cell> 
     <mt-cell title="预约门诊">
         <span>深圳中医院龙华分院</span>
         </mt-cell> 
    </div>
    <mt-button type="primary" @click="btn" id="btn">删除信息</mt-button>
   
    </div>
</template>
<style scoped>
   #img{
    width:100px ;
   margin-left:60% ;
  } 
   .aa{width: 100%;

   background-color:lemonchiffon}
   #abc{
  margin-bottom:40px ;
  margin-top: 20px;
  margin-left:5% ;
 }
 
 #ab{
   margin-left:80%;

 }
 #btn{
      background-color:#26a2ff;
      margin-left:40%;
      margin-top:50px
      
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