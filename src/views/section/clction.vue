<template>
  <div>
     <div >
      <mt-header title="科室列表" class="bgcinfo">
        <router-link to="/pageHome" slot="left">
          <mt-button icon="back">选择医院</mt-button>
        </router-link>
      </mt-header>
    </div>
    <mt-cell :title="elem.kname" v-for="(elem,i) in ksList" value='点击进入' :key="i" @click.native="toDoctor(elem.id)"></mt-cell>
  </div>
</template>
<style scope>
  .bgcinfo{
    height: 60px;
    background-color: #9F5F9F ;
    font-size: 16px;
  }
  .binfo span{
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 15px;
    text-decoration: none;
  }
  .binfo a{
    text-decoration: none;
    
  }
  .demo-input-suffix{
    margin-bottom: 15px;
  }
</style>
<script>
export default {
  data() {
    return {
      value:'',
      input2:'',
      ksList:[]
    }
  },
  methods:{
    toDoctor(ksid){
      console.log(this.$store.state.sjc.ksid)
      this.$store.commit('setKsid',ksid);
      this.$router.push('/doctor')
}
  },
  mounted(){
    console.log(this.$store.state.sjc.hospitalid);
    this.axios.get('/search/ks?hospitalid='+this.$store.state.sjc.hospitalid).then(res=>{
      this.ksList = res.data.result;
      console.log(this.ksList)
    })
  }
}
</script>