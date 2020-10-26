<template>
    <div>
      <header>
    <mt-header title="正在进行的预约">
        <router-link  slot="left" to="/yuyue" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>
   
      
       
          <p id="abc">预约详情</p>
          <img src="../../assets/shi.png" alt="" >
    
         <mt-cell title="就诊人" to="yuyue">
         <span>{{fname}}</span>
         </mt-cell> 
    
            <mt-cell title="年龄" to="yuyue">
         <span>{{fage}}</span>
         </mt-cell> 
          
            <mt-cell title="预约时间" to="yuyue">
         <span>{{time}}</span>
         </mt-cell> 
      <mt-cell title="预约状态" to="yuyue">
         <span>{{this.$store.state.state? '预约中' : '预约中' }}</span>
         </mt-cell> 
           <mt-cell title="性别" to="yuyue">
         <span>{{this.$store.state.fsex ? '男' : '女'}}</span>
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
        
              createtime:"",
              fname:"",
              time:"",
              state:"",
              doctorid:""  ,
              fsex:"",
              fage: "",
              timestmp:''
              
        };
    },
   methods:{
   btn(){
   
       MessageBox.confirm('确定取消?').then(action =>  {
      this.axios.delete('/user/cancelforward?forwardid='+this.$store.state.guanli.forwardid+'&doctorid='+this.doctorid+'&time='+this.timestamp).then(res=>{
          this.$toast({
            message:'取消成功'
          })
          setTimeout(()=>{
            this.$router.push('/oldyuyue')
          })
           });
       })
       }
       },
      
     
    mounted(){
        
        //2.向WEB服务器发送请求
        this.axios.get('/user/forwardmsg?forwardid='+this.$store.state.guanli.forwardid).then(res=>{
           
              this.createtime = res.data.result[0].createtime;
              this.fsex = res.data.result[0].fsex;
              this.fname = res.data.result[0].fname;
              this.timestamp = res.data.result[0].time;
              let x = new Date(res.data.result[0].time). toLocaleDateString();
              let y = new Date(res.data.result[0].time).toLocaleTimeString();
              this.time=x+y
              this.state= res.data.result[0].state;
              this.fage= res.data.result[0].fage;
              this.doctorid= res.data.result[0].doctorid;
         
          
        });
     
    }
}

</script>
