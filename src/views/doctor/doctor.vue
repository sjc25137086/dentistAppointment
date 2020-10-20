<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back">口腔外科</mt-button>
      </router-link>
    </mt-header>
    <!-- 中间内容 -->
    <div class="doctor_m">
      <div class="doctor_m-s">
        <span>日期{{time}}</span>
        <a href="javascript:;" class="doctor_m_a">按时期预约</a>
        <a href="javascript:;" class="doctor_m_aa">按医生预约</a>
      </div>
      
      <!-- 分页开始 -->
      <mt-navbar v-model="active" class="mint-navbar">
      <div class="tab_item1 tab_item1_1 tab_item_x">
        <mt-tab-item id="tab-container1" class="mint-tab-item">
          <p>{{weekArr[week]}}</p>
          <p>{{day}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container2" class="mint-tab-item">
          <p>{{weekArr[week + 1]}}</p>
          <p>{{day + 1}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container3" class="mint-tab-item">
          <p>{{weekArr[week + 2]}}</p>
          <p>{{day + 2}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container4" class="mint-tab-item">
          <p>{{weekArr[week + 3]}}</p>
          <p>{{day + 3}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container5" class="mint-tab-item">
          <p>{{weekArr[week + 4]}}</p>
          <p>{{day + 4}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container6" class="mint-tab-item">
          <p>{{weekArr[week + 5]}}</p>
          <p>{{day + 5}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container7" class="mint-tab-item">
          <p>{{weekArr[week + 6]}}</p>
          <p>{{day + 6}}</p>
        </mt-tab-item>
        </div>
        <div class="tab_item2 tab_item2_2 tab_item_x">
        <mt-tab-item id="tab-container8" class="mint-tab-item">
          <p>{{weekArr[week]}}</p>
          <p>{{day}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container9" class="mint-tab-item">
          <p>{{weekArr[week + 1]}}</p>
          <p>{{day + 1}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container10" class="mint-tab-item">
          <p>{{weekArr[week + 2]}}</p>
          <p>{{day + 2}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container11" class="mint-tab-item">
          <p>{{weekArr[week + 3]}}</p>
          <p>{{day + 3}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container12" class="mint-tab-item">
          <p>{{weekArr[week + 4]}}</p>
          <p>{{day + 4}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container13" class="mint-tab-item">
          <p>{{weekArr[week + 5]}}</p>
          <p>{{day + 5}}</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container14" class="mint-tab-item">
          <p>{{weekArr[week + 6]}}</p>
          <p>{{day + 6}}</p>
        </mt-tab-item>
        </div>
      </mt-navbar>
      <!-- 分页内容 -->
      <div class="mt-tab-container">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1" >
          <div class="doctor_article" v-for="(article,index) of info" :key = "index" @click="subt(article.id)">
          <!-- 医生图片 -->
          <div class="article_image" >
            <img :src="info.img">
          </div>
          <!-- 旁边的div -->
          <div class="doctor_div">
            <div class="doctor_name">
              <span>{{article.dname}}</span>
              <div class="doctor_yh">
                <mt-badge size="small" color="#26A2FF">¥：{{article.price}}</mt-badge>
              </div>
            </div>
            <div>
              <p>{{article.dage}}</p>
              <p>{{article.dposition}}</p>
            </div>
            <div class="doctor_jian">
             {{article.description}}
            </div>
          </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<style>

.tab_item1 {
  position: absolute;
  left: 0;
  right: 0;
}
.tab_item1_1{
transform:translateX(-100%);
transition:transform 1s ease-in-out;
}

.tab_item_x {
  justify-content: space-between;
  transform:translateX(0);
  transition:transform 1s ease-in-out;
}

.tab_item2 {
  /*display: none;*/
  position: absolute;
  left: 0;
  right: 0;
  transform: translateX(100%);
}

.tab_item2_2{
transform:translateX(100%);
transition:transform 1s ease-in-out;
}

/* 改变被选中时tab栏切换的字体样式 */
.mint-navbar .mint-tab-item.is-selected p{
  color: #fff;
}

/* 改变被选中时tab栏切换的样式 */
.mint-navbar .mint-tab-item.is-selected {
  background:  #26a2ff;
  border: 0;
  margin-bottom: -3px;
}

/* 改变头部样式 */
.mint-header {
  height: 60px;
}

.mint-navbar {
  position: relative;
  overflow-y: auto;
  height: 70px;
  border-bottom: 1px solid #26a2ff;
}

/* 整个中间的容器 */
.doctor_m {
  width: 100%;
  position: absolute;
  margin: 10px auto;
  font-size: 18px;
  color: #999;
  margin-bottom: 50px;
}

.doctor_m-s {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 5px;
}

.doctor_m_a,
.doctor_m_aa {
  text-decoration: none;
  padding: 5px;
  border: 1px solid #26A2FF;
  position: relative;
  right: -5%;
}

.doctor_m_a {
  background-color: #26A2FF;
  color: #fff;
}

.doctor_m_aa {
  color: #26A2FF;
}

.mint-navbar .mint-tab-item {
  width: 10%;
  float: left;
  padding: 5px;
  margin: 5px 3px;
}

.mint-navbar .mint-tab-item p {
  font-size: 15px;
  margin: 5px 0;
  color: #999;
}

/* 分页容器 */

.doctor_article {
  display: flex;
  margin: 8px 5px;
  border-bottom: 1px solid #26a2ff;

}

/* 医生图容器 */
/* 图片样式 */
.article_image{
  margin-right: 15px;
}

.article_image img{
  width:112px;
  margin-top: 5px;
  border-radius: 5px;
}

.doctor_div,
.doctor_name {
  width: 100%;
  margin: 5px auto;
}

.doctor_div div+div {
  margin: 15px 0;
}

.doctor_name {
  height: 20;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
}

#tab-container1 {
  position:relative;
}

.doctor_yh {
  font-size: 18px;
  margin-right: 10px;
  position: absolute;
  right: 0;
}

/* 设置文本 */
.doctor_div {
  overflow: hidden;
}
.doctor_jian {
  height: 20px;
  overflow: hidden;
  /* 将溢出的文本变成省略号 */
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>

<script>


export default {
  data(){
    return {
      active:'tab-container1',
      week:'',
      time:'',
      day:'',
      month:'',
      info:'',
      docx:'',
      weekArr : [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ,"周日", "周一", "周二", "周三", "周四", "周五", "周六","周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    }
  },
  methods:{
    currentTime() {
      //获取系统时间
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate() ; // 日
      let week = date.getDay(); //星期
      this.week = week;
      this.time = `${year}-${month}-${day}`;
      this.day = day;
      this.month = month;
    },
    subt(i) {
      //this.$store.state.doctorId = i;
      this.$router.push('/homepage');
    }
  },
  mounted() {
    //在页面重载的时候调用方法currentTime
    this.currentTime();
    //发送请求接受医生信息
    this.axios.get('/search/doctors',{params:{ksid:1}}).then(res => {
      let doctors = res.data.result;
      if(doctors.img == null) {
        doctors.img = require('../../assets/avatar/doctors.jpg')
      }
      this.info = doctors;
      console.log(doctors)
    })
  }
}
</script>