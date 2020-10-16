<template>
  <div>
     <div >
      <mt-header title="科室列表" class="bgcinfo">
        <router-link to="/" slot="left">
          <mt-button icon="back">科室选择</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="demo-input-suffix">
      <el-input
        placeholder="搜索科室、医生"
        prefix-icon="el-icon-search"
        v-model="input2">
      </el-input>
    </div>
    <!-- <mt-search v-model="value" placeholder="搜索科室、医生" class="pinfo"></mt-search> -->
    <div class="binfo">
      <router-link to=""><span>口腔修复科</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>美学工作室</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>下颚关节科</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>口腔预防科综合干预项目专用</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>牙体牙髓科</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>口腔外科</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>舒适化诊室</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>正畸科一</span></router-link>
      <el-divider></el-divider>
      <router-link to=""><span>正畸科二</span></router-link>
      <el-divider></el-divider>
  </div>
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
      input2:''
    }
  },
}
</script>