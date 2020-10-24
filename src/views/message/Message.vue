<template>
    <div>
      <header>
    <mt-header title="历史预约">
        <router-link  slot="left" to="/oldyuyue" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>
   
           <p id="abc">预约详情</p>
          <img src="../../assets/shi.png" alt="" >
 
       
        
         <mt-cell title="就诊人" to="oldyuyue">
         <span>{{fname}}</span>
         </mt-cell> 
            <mt-cell title="预约时间" to="oldyuyue">
         <span>{{time}}</span>
         </mt-cell> 
            <mt-cell title="预约状态" to="oldyuyue">
         <span>{{this.$store.state.state ===0? '已取消' : '已完成'}}</span>
         </mt-cell> 
         <mt-cell title="年龄" to="oldyuyue">
         <span>{{fage}}</span>
         </mt-cell> 
         <mt-cell title="性别" to="oldyuyue">
         <span>{{this.$store.state.fsex ===1 ? '男' : '女'}}</span>
         </mt-cell> 
            <mt-cell title="医生编号" to="oldyuyue">
         <span>{{doctorid}}</span>
         </mt-cell> 
   
  
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
       
           
              fname:"",
              time:"",
              state:"",
              doctorid:""  ,
              fage:"",
              fsex:""

              
        };
    },
  
    mounted(){
       
      
        //2.向WEB服务器发送请求
        this.axios.get('/user/forwardmsg?forwardid='+this.$store.state.guanli.forwardid).then(res=>{
              this.fname = res.data.result[0].fname;
              let a = new Date(res.data.result[0].time).toLocaleDateString();
             let b=new Date(res.data.result[0].time).toLocaleTimeString();
               this.time=a+b
              this.$store.state.state= res.data.result[0].state;
              this.doctorid= res.data.result[0].doctorid;
              this.fage= res.data.result[0].fage;
            this.$store.state.fsex= res.data.result[0].fsex;
        });
    }
}
</script>