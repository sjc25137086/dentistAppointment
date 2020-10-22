<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <mt-header >
      <router-link to="/" slot="left">
        <mt-button icon="back">口腔外科</mt-button>
      </router-link>
    </mt-header>
    <!-- 中间内容 -->
    <div class="doctor_m">
      <div class="doctor_m-s">
        <span>日期{{time}}</span>
        <div>
        <a href="javascript:;" class="doctor_m_a">按时期预约</a>
        <a href="javascript:;" class="doctor_m_aa">按医生预约</a>
        </div>
      </div>
      
      <!-- 分页开始 -->
      <mt-navbar v-model="active" class="mint-navbar">
      <div class="tab_item1 tab_item1_1 tab_item_x">
        <mt-tab-item :id="i" class="mint-tab-item" v-for="(time,i) of 14" :key="i"  @click.native="click_delay(i)">
          <p>{{weekArr[week + i]}}</p> 
          <p>{{day[i]}}</p>
        </mt-tab-item>
      </div>
      </mt-navbar>
      <!-- 分页内容 -->
      <div class="mt-tab-container">
      <mt-tab-container v-model="active">
        <mt-tab-container-item :id="i"  v-for="(time,i) of 14" :key="i">
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
            <div class="see_me" v-if='`${parseInt(article.stateos) == true}`'>可预约</div>
            <div class="see_me" v-else>不可预约</div>
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
/* 滑动效果 */
.tab_item1 {
  position: absolute;
  left: 0;
  right: 0;
  width: 200%;
  display: flex;
  justify-content: space-between;
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
.mt-tab-container {}
.doctor_m {
  width: 100%;
  position: absolute;
  margin: 10px auto;
  font-size: 18px;
  color: #999;
  margin-bottom: 50px;
}

/* 预约按钮设置 */
.doctor_m-s {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 5px;
  position: relative;
}
.doctor_m-s div {
  position: absolute;
  right: 2%;
  top: -12%;
}
.doctor_m_a,
.doctor_m_aa {
  text-decoration: none;
  padding: 5px;
  border: 1px solid #26A2FF;
}

.doctor_m_a {
  background-color: #26A2FF;
  color: #fff;
}

.doctor_m_aa {
  color: #26A2FF;
}

/* 分页头部设置 */
.mint-navbar .mint-tab-item {
  width: 5%;
  float: left;
  padding: 5px;
  margin: 5px 3px;
}

.mint-navbar .mint-tab-item p {
  font-size: 15px;
  margin: 5px 0;
  color: #999;
}
.mint-navbar .mint-tab-item p+p {
  font-size: 12px;
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

/* 可预约样式 */
.doctor_div {
  position: relative;
}

.see_me {
  position: absolute;
  right: 4%;
  top: 20%;
  color: #000;
}

.doctor_div,
.doctor_name {
  width: 100%;
  margin: 5px auto;
}

.doctor_div div+div {
  margin: 14px 0;
}

.doctor_div p {
  margin-bottom: 5px;
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
  font-size: 15px;
}
</style>

<script>


export default {
  data(){
    return {
      active:0,
      week:'',
      time:'',
      day:[],
      doctor_Array:[],
      delay:0,
      info:'',
      docx:'',
      weekArr : [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ,"周日", "周一", "周二", "周三", "周四", "周五", "周六","周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    }
  },
  watch:{

  },
  methods:{
     click_delay(i) {
      this.delay = i;
      //获取时间格式
      let startTime = new Date(new Date().setDate(new Date().getDate() + this.delay));
      let endTime = new Date(new Date().setDate(new Date().getDate() + this.delay + 1));
      //转换为时间格式
      let day1 = startTime.toLocaleDateString();    
      let day2 = endTime.toLocaleDateString();
      //转换为时间戳
      let daystarttime = this.moment(day1).valueOf();
      let dayendtime = this.moment(day2).valueOf()
      this.$store.state.doctor.daystarttime = day1;
      this.$store.state.doctor.dayendtime = day2;

      //console.log(day1,day2,startTime,endTime);
      //console.log(this.moment(day1).valueOf());
      //console.log(this.moment(day2).valueOf());
      //let day = date.getDate(); // 日
      //let Ms = new Date(date.setDate(date.getDate() + this.delay)).toLocaleDateString();
      //2020-8-22 2020-8-23
      //console.log(Ms)
     },
    currentTime() {
      //获取系统时间
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let week = date.getDay(); //星期
      let day = date.getDate(); // 日
      this.week = week;
      for(let n = 0;n < 15;n ++) {
      date.setDate(date.getDate() +  n) ;
      let m = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); //获取当前月份的日期，不足10补0
      let day_one = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      this.day.push(`${m}-${day_one}`);
      date.setDate(date.getDate() - n) ;
      }
      this.time = `${year}-${month}-${day}`;
    },
    subt(i) {
      //this.$store.state.doctorId = i;
      this.$store.commit('doctorId',i);
      this.$router.push('/homepage');
    }
  },
  mounted() {
    //在页面重载的时候调用方法currentTime
    this.currentTime();
    //发送请求接受一个科室下所有医生信息
    this.axios.get('/search/doctors',{params:{ksid:`${this.$store.state.doctor.ksid}`}}).then(res => {
      let doctors = res.data.result;
      //设置默认图片
      if(doctors.img == null) {
        doctors.img = require('../../assets/avatar/doctors.jpg')
      }
      
      doctors.forEach(item => {
         this.axios.get('/search/time',{params:{doctorid:`${item.id}`,daystarttime:`${this.$store.state.doctor.daystarttime}`,dayendtime:`${this.$store.state.doctor.dayendtime}`}}).then(res => {
            //this.info.doctorid = 
            if(res.data.result.length <= 16) {
              item.stateos = true;
            } else {
              item.stateos = false;
            }
          })
      })
      this.info = doctors;
    })
    this.click_delay(0);
  }
}
</script>