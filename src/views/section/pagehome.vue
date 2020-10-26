<template>
  <div>
    <div>
      <mt-header title="牙医预约">
        <div slot="right" class="shortcut" v-if="this.$store.state.vuexhui.yy_logined==0">
        <router-link to="/register">注册 </router-link>
        <router-link to="/login">登录</router-link>
      </div>
      <div slot="right" class="shortcut" v-else>
         <mt-button type="primary" @click="logout">注销</mt-button>
       </div>
      </mt-header>
    </div>
    <div class="mt_search">
      <!-- 搜索框开始 -->
      <mt-search placeholder="搜索"> </mt-search>
    </div>
    <!-- 搜索框结束 -->
    <div class="button_info">
      <mt-button type="primary" size="small" @click="showAreaSelect">选择城市</mt-button>
      <span>   当前城市: {{province}}  {{city}}</span>
    </div>

    <div class='hospital_all'>
      <mt-tab-container>
        <mt-tab-container-item v-if='hospitalList != undefined'>
          
          <div class='hospital' v-for='(hospital,i) in hospitalList' @click="toks(hospital.id)" :key="i">
            <div class="hospital_img" >
              <img src='@/assets/1.jpg'>
            </div >
            <div class="hospital_info">
              <div class="hospital_name">
                <span>{{hospital.hname}}</span>
                <div class="hospital_yh">
                  <mt-badge size="small" color="#26A2FF">{{hospital.level}}</mt-badge>
                </div>
              <div class="hospital_site">
                <p style='font-size:10px'>{{hospital.hsite}}</p>
              </div>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        
        <mt-tab-container-item v-else style="margin-top:50%">
          <p style="text-align:center;color:#26a2ff;font-weight:1000"> 暂时只支持广东省深圳市的查询哦！！！</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <!-- --------------------------------------------------------------------------------------------- -->
    <mt-popup v-model="areaVisible"  popup-transition="popup-fade" position="bottom"  style="width: 100%;" >
    <mt-picker :slots="slots" value-key='name' @change="changeProvince" class="Picker_to"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  methods: {
    toks(hospitalid){
      this.$store.commit('setHospitalid',hospitalid);
      this.$router.push('/clction')
    },
    closePopup(){
      this.flag = flase;
      this.areaVisible = false;
    },
    changeProvince(picker, values) {
      if(this.flag){
        if(this.provinceid != values[0].provinceid){
          this.province = values[0].name;
          this.provinceid = values[0].provinceid;
          this.axios.get('/search/city?provinceid='+this.provinceid).then(res=>{
            if(res.data.result !=undefined){
              for(var i in res.data.result){
                res.data.result[i].name = res.data.result[i].city;
              }
              picker.setSlotValues(1, res.data.result)
            }else{
              picker.setSlotValues(1, [{cityid:0,name:'无'}])
            }
          })
        }else{
          if(values[1] !=undefined){
            this.city = values[1].name;
            if(this.cityid!= values[1].cityid){
            this.cityid = values[1].cityid;
            this.axios.get('/search/hospital?cityid='+this.cityid).then(res=>{
              this.hospitalList = res.data.result;
            })
          }
          }
        }
      }
    },
    logout(){
      this.$store.commit('logout');
    },
    showAreaSelect(){
      this.areaVisible =true;
      this.flag = true;
    },
    selectArea(picker){

    }
  },
  data() {
    return {
      province:'请选择',
      city:'请选择',
      hospitalList:undefined,
      slots: [
        {
          flex: 2,
          values: [],
          className: "slot1",
          textAlign: "right",
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 2,
          values: [],
          className: "slot3",
          textAlign: "left",
        },
        
      ],
      flag:false,
      areaVisible:false,
      provinceid:0,
      cityid:0
    };
  },

  mounted(){
    this.axios.get('/search/province').then(res=>{
      for(var i in res.data.result){
        res.data.result[i].name = res.data.result[i].province;
        this.slots[0].values.push(res.data.result[i]);
      }
    })
  }
};
</script>
<style scope>
a{
  text-decoration: none;
  color:#fff;
}
.hospital_info{
  border-bottom: 1px solid #26a2ff;
  height: 98%;
  width: 60%;
}
.hospital_name{
  padding-top: 5%;
}
.hospital_site{
  margin-top: 10px;
}
.hospital{
  padding-top: 5px;
  width: 100%;
  height: 100px;
  margin-top: 5px;
  display: flex;
  
}
.hospital_img{
  margin-left: 5%;
  margin-top: 1.5%;
  width:30%;
  
}
.hospital_img img{
  width:80%;
  border:1px solid lightblue;
  border-radius: 50%;
}

.shortcut {
  text-decoration: none;
}
.mt_search {
  margin-top: 2px;
  height: 5px;
}
.button_info {
  margin-top: 50px;
}
.Picker_to {
  margin-left: 45px;
  /* display: none; */
}


</style>


