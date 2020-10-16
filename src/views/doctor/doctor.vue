<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back">口腔外科</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 中间内容 -->
    <div class="doctor_m">
      <div class="doctor_m-s">
        <span>日期{{time}}</span>
        <a href="javasprice" class="doctor_m-a">按时期预约</a>
        <a href="javasprice" class="doctor_m-a">按医生预约</a>
      </div>
      <!-- 底部分页 -->
      <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1">
          <p>{{week}}</p>
          <p>{{day}}</p>
          <p>无</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container2">
          <p>{{week}}</p>
          <p>{{day}}</p>
          <p>无</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container3">
          <p>{{week}}</p>
          <p>{{day}}</p>
          <p>无</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container4">
          <p>{{week}}</p>
          <p>{{day}}</p>
          <p>无</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container5">
          <p>{{week}}</p>
          <p>{{day}}</p>
          <p>无</p>
        </mt-tab-item>
        
      </mt-navbar>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1" >
          <div class="article" v-for="(article,index) of stt" :key = "index">
          <!-- 医生图片 -->
          <div class="article-image" >
            <img :src='article.img'>
          </div>
          <div class="article-wrapper">
            <div class="article-wrapper-name">
              <span>{{article.name}}</span>
              <span class="article-wrapper-name-p">
              余号:{{article.yh}}
              <mt-badge size="small">20￥</mt-badge>
              </span>
            </div>
            <div  class="article-wrapper-zy">
              {{article.zhiye}}
            </div>
            <div class="article-wrapper-js">
              {{article.jianjie}}
            </div>
          </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<style>
.doctor_m {
  margin: 10px 5px;
  font-size: 18px;
}
.doctor_m-s {
  margin-bottom: 20px;
}
.doctor_m-a {
  height: 20px;
  float: right;
  text-decoration: none;
  color: #000;
  font-size: 15px;
  margin-top: 2px;
}

  /* 文章容器 */
.article{
	padding-bottom:10px;
	border-bottom:1px solid #999;
	margin:10px;
  display: flex;
}

/* 医生图容器 */
.article-image{
  margin-right: 15px;
}
.article-image img{
  width:112px;
  border-radius: 5px;
}
.article-wrapper{
	margin-top: 10px;
  
}
.article-wrapper-name{
	font-size: 20px;
  font-weight: 700;
}
.article-wrapper-name-p {
  margin-left: 125px;
	font-size: 15px;

}
.article-wrapper-zy{
	margin-top: 15px;
}
.article-wrapper-js{
	margin-top: 15px;
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
      stt:[
        {
        name:"jj",
        zhiye:'主治医生',
        jianjie:'asdj;asjdilkasldjdksa;jdklasjdlkjsalkdjalksdjlksjadlkjaslkdjlkasjdlkasjdlkas',
        yh:'6',
        img:require('../../assets/avatar/00c1d55af1178ca801206abad941b6.jpg')
        },
        {
        name:"jj",
        zhiye:'主治医生',
        jianjie:'asdj;asjdilkasldjdksa;jdklasjdlkjsalkdjalksdjlksjadlkjaslkdjlkasjdlkasjdlkas',
        yh:'6',

         img:require('../../assets/avatar/00c1d55af1178ca801206abad941b6.jpg')
        },
        {
        name:"jj",
        zhiye:'主治医生',
        jianjie:'asdj;asjdilkasldjdksa;jdklasjdlkjsalkdjalksdjlksjadlkjaslkdjlkasjdlkasjdlkas',
        yh:'6',

         img:require('../../assets/avatar/00c1d55af1178ca801206abad941b6.jpg')
        },
        ]
      
    }
  },
  methods:{
    currentTime() {
      let date = new Date();
       let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); //星期
      let weekArr = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ];
      this.week = weekArr[week];
      this.time = `${year}-${month}-${day}`;
      this.day = day;
    }
  },
  mounted() {
    this.currentTime();
    this.axios.get('').then(res => {
      
    })
  }
}
</script>