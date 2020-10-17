<template>
    <div>
      <header>
    <mt-header title="历史预约详情">
        <router-link  slot="left" to="oldyuyue" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>

    <!-- <img src="../../assets/yamei.jpg" alt="" id="img"> -->
     <img src="../../assets/shi.png" alt="">


     
   
   
    
         
      <mt-cell-swipe  title="口腔修复">
         <span>已预约</span>
         </mt-cell-swipe > 
         <mt-cell-swipe  title="预约人">
         <span>管丽</span>
         </mt-cell-swipe > 
         <mt-cell-swipe  title="性别">
         <span>男</span>
         </mt-cell-swipe > 
   
     <mt-cell-swipe  title="年龄">
         <span>20</span>
         </mt-cell-swipe >
     <mt-cell-swipe title="医生编号">
         <span>0050</span>
         </mt-cell-swipe> 
        <mt-cell-swipe  title="预约编号">
         <span>020</span>
         </mt-cell-swipe >  
         <mt-cell-swipe  title="创建预约时间">
         <span>2020-06-20</span>
         </mt-cell-swipe >   
       
         <mt-cell-swipe  title="预约时间">
         <span>2020-06-28</span>
         </mt-cell-swipe > 
  <!--滑动块-->
        <mt-button type="primary" @click="btn" id="btn">删除信息</mt-button> 
   </div>

   
  
</template>
<style scoped>
#aa{
   margin-left:40% ;
   margin-top:50px ;
}
#cc{
  width: 100%;
}
   #img{
    width:100% ;
  
  } 
  .mint-cell{
    background-color:whitesmoke;
  }
 #abc{ margin-bottom:40px ;
   margin-top:20px;
  margin-left:5% ;
 }
 
 #ab{
   margin-left:80%;

 }

 

 

  #btn{
     
      margin-left:40%;
      margin-top:30px
      
  }
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
          message: '确认删除？',
          showCancelButton: true
        })


 

       } 
    }
}
</script>
