<template>
  <div>
     <mt-tabbar v-model="tabbar" fixed>
       <mt-tab-item id="index">
         首页
         <img src="../assets/index_enabled.png" slot="icon" v-if="tabbar == 'index'">
         <img src="../assets/index_disabled.png" slot="icon" v-else>
        </mt-tab-item>
       <mt-tab-item id="me">
         我的
         <img src="../assets/me_enabled.png" slot="icon" v-if="tabbar == 'me'">
         <img src="../assets/me_disabled.png" slot="icon" v-else>
        </mt-tab-item>
     </mt-tabbar>
   </div>
</template>
<script>
export default {
  data(){
    return{
      tabbar:"index"
    }
  },
  watch:{
    tabbar(value){
      if(value == 'index'){
        this.$router.push('/').catch(e=>{});
      }
      if(value == 'me'){
        this.$router.push('/personalCenter').catch(e=>{});
      }
    }
  }
}
</script>
<style>
  a .mint-tab-item-label{
    color:#222;
  }

  .is-selected .mint-tab-item-label{
    color:#26a2ff
  }
</style>