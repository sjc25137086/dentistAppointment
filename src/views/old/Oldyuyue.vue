<template>
    <div>
      <header>
    <mt-header title="已完成的预约">
        <router-link  slot="left" to="/personalCenter">
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header> 
       <div>
     <mt-swipe :auto="6000">
  <mt-swipe-item><img src="../../assets/yachi.jpg" alt="" id="img"></mt-swipe-item>
  <mt-swipe-item> <img src="../../assets/yamei.jpg" alt="" id="img"></mt-swipe-item>
        </mt-swipe>
       </div>


     <div v-for="(value,key) of yuyue" :key="key" @click='showDetail(value.id)'>
          <mt-cell :title="value.fname" to="message">
         <span>{{time}}</span>
         </mt-cell> 
         
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
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data(){
        return{
             forwardid:"",
             yuyue:[]
        };
    },
    methods:{
       btn(){
        MessageBox({
          title: '',
          message: '确认删除？',
          showCancelButton: true
        })
      } ,
      showDetail(forwardid){//vuex中参数
      this.$store.commit('setforwardid',forwardid);
       
        console.log(this.$store.state.guanli.forwardid);
     
      }

    },
    
      mounted(){
       
      
        //2.向WEB服务器发送请求
        this.axios.get('/user/overforward?uid=1').then(res=>{
             this.yuyue = res.data.result
             console.log(res.data.result)
             let x = new Date(res.data.result[0].time).toLocaleDateString();
          let y = new Date(res.data.result[0].time).toLocaleTimeString();
             this.time=x+y
          let a = new Date(res.data.result[1].time).toLocaleDateString();
          let b=new Date(res.data.result[1].time).toLocaleTimeString();
             this.time=a+b
        
          let c = new Date(res.data.result[1].time).toLocaleDateString();
          let d=new Date(res.data.result[1].time).toLocaleTimeString();
             this.time=c+d
          
        });
    }
}
</script>
}
</script>