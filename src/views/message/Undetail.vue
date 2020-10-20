<template>
    <div>
      <header>
    <mt-header title="预约中心">
        <router-link  slot="left" to="/yuyue" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>
   
      
       
          <p id="abc">预约详情</p>
          <img src="../../assets/shi.png" alt="" >
     <mt-cell title="编号" to="undetail">
         <span>{{id}}</span>
         </mt-cell> 
            <mt-cell title="创建时间" to="yuyue">
         <span>{{createdtime}}</span>
         </mt-cell> 
            <mt-cell title="就诊人" to="yuyue">
         <span>{{faname}}</span>
         </mt-cell> 
            <mt-cell title="预约时间" to="yuyue">
         <span>{{time | formatDate}}</span>
         </mt-cell> 
            <mt-cell title="预约状态" to="yuyue">
         <span>{{state}}</span>
         </mt-cell> 
            <mt-cell title="医生编号" to="yuyue">
         <span>{{doctorid}}</span>
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
  margin-bottom:10px ;
  margin-top: 20px;
  margin-left:5% ;
 }
 #ab{
   margin-left:80%;

 }
 #btn{margin-left:40%}
</style>
<script>
 import { MessageBox } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  


    data(){
        return{
              id:"",
              createtime:"",
              faname:"",
              time:"",
              state:"",
              doctorid:""  

              
        };
    },
    methods:{
       btn(){
        MessageBox({
          title: '您的预约已受理,请根据时间准时前来',
          message: '确认？',
          showCancelButton: true
        })


 

       } 
    },
    mounted(){
        //this.$router,路由
        //this.$route,路由请求信息
        //1.获取地址栏中的ID
        let id = this.$route.params.id;
        //2.向WEB服务器发送请求
        this.axios.get('/user/doingforward?uid=1').then(res=>{
            this.id = res.data.result[0].id;
              this.createtime = res.data.result[0].createtime;
              this.faname = res.data.result[0].fname;
              this.time = res.data.result[0].time;
              this.state= res.data.result[0].state;
              this.doctorid= res.data.result[0].doctorid;
          
        });
    }
}
</script>
