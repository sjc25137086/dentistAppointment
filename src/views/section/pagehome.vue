<template>
  <div>
    <div>
      <mt-header title="牙医预约">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/login" slot="right" class="shortcut"
          >登录</router-link
        >
      </mt-header>
    </div>
    <div class="mt_search">
      <!-- 搜索框开始 -->
      <mt-search placeholder="搜索"> </mt-search>
    </div>
    <!-- 搜索框结束 -->
    <div class="button_info">
      <mt-button type="primary" size="small" @click="showAreaSelect">选择地区</mt-button>
    </div>

    <div>
      <mt-tab-container>
        <mt-tab-container-item>
          <div class='.doctor_article' v-for='(hospital,i) in hospitalList' :key="i">
          <!-- 医生图片 -->
            <div class="article_image" >
              <img src='@/assets/1.jpg'>
            </div>
          <!-- 旁边的div -->
            <div class="doctor_div">
              <div class="doctor_name">
                <span>{{hospital.hname}}</span>
                <div class="doctor_yh">
                  <span>{{hospital.hsite}}</span>
                </div>
              </div>
              <div>
                <!-- <p>{{article.zhiye}}</p> -->
              </div>
              <div>
                <!-- <p>{{article.jianjie}}</p> -->
              </div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div>
      <mt-tabbar fixed>
        <mt-tab-item id="index">
          <img src="" slot="icon" />
        </mt-tab-item>
        <p class="tabbar_info">______________</p>
        <mt-tab-item id="me">
          <img src="" slot="icon" />
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- --------------------------------------------------------------------------------------------- -->
    <mt-popup v-model="areaVisible"  popup-transition="popup-fade" position="bottom"  style="width: 100%;" >
    <mt-picker :slots="slots" value-key='name' @change="changeProvince" class="Picker_to"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import helloWorld from '@/components/HelloWorld'
export default {
  components:{
    helloWorld
  },
  methods: {
    closePopup(){
      this.flag = flase;
      this.areaVisible = false;
    },
    changeProvince(picker, values) {
      // if (values[9] > values[9]) {
      //   picker.setSlotValue(1, values[0]);
      // }
      if(this.flag){
        if(this.provinceid != values[0].provinceid){
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
          console.log(1)
          if(values[1] !=undefined){
            if(this.cityid!= values[1].cityid){
            this.cityid = values[1].cityid;
            this.axios.get('/search/hospital?cityid='+this.cityid).then(res=>{
              this.hospitalList = res.data.result;
              console.log(res.data.result);
            })
          }
          }
        }
      }
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
      hospitalList:[],
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

.tabbar_info {
  border-bottom: 5px solid #161823;
}
.Picker_to {
  margin-left: 45px;
  /* display: none; */
}

.doctor_article {
  display: flex;
  margin: 8px 5px;
}

/* 医生图容器 */
.article_image{
  margin-right: 15px;
}
.article_image img{
  width:112px;
  border-radius: 5px;
}
.doctor_div,
.doctor_name {
  width: 100%;
  margin: 5px auto;
}
.doctor_div div+div {
  margin: 15px auto;
}
.doctor_name {
  height: 20;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
}

.doctor_yh {
  font-size: 18px;
  margin-right: 10px;
  position: relative;
  left: 120px;
}

</style>


