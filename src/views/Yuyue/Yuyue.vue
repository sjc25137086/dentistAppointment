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
        <mt-cell title="正在预约">
         <span>详细信息</span>
         </mt-cell> 
          <mt-cell title="正在预约">
         <span>详细信息</span>
         </mt-cell>
         </div>
       <mt-button @click="downLoad" id="btn">取消预约</mt-button>
      </div> 
      
</template>
  <style>
  #btn{
      background-color:#26a2ff;
      margin-left:40%;
   
  }
  </style>
<script>
export default {
    data(){
        return{

        };
    },
    methods:{
       downLoad(){
           
 MessageBox.alert('Success!').then(action => {
  
});


 

       } 
    }
}
</script>