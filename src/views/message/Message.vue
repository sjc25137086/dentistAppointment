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
     <!-- <img src="../../assets/shi.png" alt=""> -->

     <mt-cell  title="预约状态">
         <span>{{state}}</span>
         </mt-cell > 
         <mt-cell title="预约人">
         <span>{{fname}}</span>
         </mt-cell > 
         <mt-cell title="性别">
         <span>{{fsex}}</span>
         </mt-cell> 
   
     <mt-cell  title="年龄">
         <span>{{fage}}</span>
         </mt-cell >
     <mt-cell title="医生编号">
         <span>{{doctorid}}</span>
         </mt-cell> 
        <mt-cell title="预约编号">
         <span>{{userid}}</span>
         </mt-cell >  
         <mt-cell  title="创建预约时间">
         <span>{{time2}}</span>
         </mt-cell >   
       
         <mt-cell  title="预约时间">
         <span>{{time}}</span>
         </mt-cell> 
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


export default {
    data(){
        return{
          state:"",
          fname:"",
          fsex:"",
          fage:"",
          doctorid:"",
          userid:"",
          time2:"",
          time:""
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
    },
     mounted(){
        //this.$router,路由
        //this.$route,路由请求信息
        //1.获取地址栏中的ID
	      var uid=req.query.uid;
	
        //2.向WEB服务器发送请求
        this.axios.get('/user/overforward?uid='+ id).then(res=>{
            this.userid= res.data.result;
            console.log(res.data)
        });
    }
}
</script>
