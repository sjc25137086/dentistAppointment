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
       
          <p id="abc">预约详情</p>
  
  
        <mt-cell title="预约人">
         <span>管丽</span>
         </mt-cell> 
          <mt-cell title="预约时间">
           <span>2020-10-20</span>
         </mt-cell> 
     <mt-cell title="预约门诊">
         <span>深圳中医院龙华分院</span>
         </mt-cell> 
     <mt-button type="primary" @click="btn" id="btn">取消预约</mt-button>
  
</div>
   
</template>
<style scoped>
   #img{
    width:100px ;
   margin-left:60% ;
  } 
   .aa{width: 100%;
   background-color:floralwhite}
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
          message: '确认取消？',
          showCancelButton: true
        })


 

       } 
    }
}
</script>