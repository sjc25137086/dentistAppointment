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
      <!-- 底部分页 -->
      <mt-navbar v-model="active" class="mint-navbar">
        <mt-tab-item id="tab-container1" class="mint-tab-item">
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
        <mt-tab-item id="tab-container6">
          <p>{{week}}</p>
          <p>{{day}}</p>
          <p>无</p>
        </mt-tab-item>
        
      </mt-navbar>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1" >
          <div class="doctor_article" v-for="(article,index) of stt" :key = "index">
          <!-- 医生图片 -->
          <div class="article_image" >
            <img :src='article.img'>
          </div>
          <!-- 旁边的div -->
          <div class="doctor_div">
            <div class="doctor_name">
              <span>{{article.name}}</span>
              <div class="doctor_yh">
                <span>余号:{{article.yh}}</span>
                <mt-badge size="small" color="#FCA254">¥：20</mt-badge>
              </div>
            </div>
            <div>
              <p>{{article.zhiye}}</p>
            </div>
            <div>
              <p>{{article.jianjie}}</p>
            </div>
          </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<style>
.mint-header {
  background: #3DCDB4;
  width: 100%;
  height: 60px;
}
.mint-navbar {
  width: 100%;
}
.doctor_m {
  width: 100%;
  position: absolute;
  margin: 10px auto;
  font-size: 18px;
  color: #999;
}
.doctor_m-s {
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 5px;
}

.doctor_m_a,
.doctor_m_aa {
  text-decoration: none;
  padding: 5px;
  border: 1px solid #3DCDB4;
  position: relative;
  left: 20px;
}
.doctor_m_a {
  background-color: #3DCDB4;
  color: #fff;
}

.doctor_m_aa {
  color: #3DCDB4;
}

.mint-navbar .mint-tab-item {
  padding: 5px;
  margin: 10px auto;
}
.mint-navbar .mint-tab-item p {
  font-size: 18px;
  margin: 5px;
  color: #999;
}

/* 分页容器 */
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
        img:require('../../assets/avatar/d2b0d8ac6b02437b8b207a398f94b1d.jpg')
        },
        {
        name:"jj",
        zhiye:'主治医生',
        jianjie:'asdj;asjdilkasldjdksa;jdklasjdlkjsalkdjalksdjlksjadlkjaslkdjlkasjdlkasjdlkas',
        yh:'6',

         img:require('../../assets/avatar/d2b0d8ac6b02437b8b207a398f94b1d.jpg')
        },
        {
        name:"jj",
        zhiye:'主治医生',
        jianjie:'asdj;asjdilkasldjdksa;jdklasjdlkjsalkdjalksdjlksjadlkjaslkdjlkasjdlkasjdlkas',
        yh:'6',
        img:require('../../assets/avatar/d2b0d8ac6b02437b8b207a398f94b1d.jpg')
        },
         {
        name:"jj",
        zhiye:'主治医生',
        jianjie:'asdj;asjdilkasldjdksa;jdklasjdlkjsalkdjalksdjlksjadlkjaslkdjlkasjdlkasjdlkas',
        yh:'6',
        img:require('../../assets/avatar/d2b0d8ac6b02437b8b207a398f94b1d.jpg')
        },
         {
        name:"jj",
        zhiye:'主治医生',
        jianjie:'asdj;asjdilkasldjdksa;jdklasjdlkjsalkdjalksdjlksjadlkjaslkdjlkasjdlkasjdlkas',
        yh:'6',
        img:require('../../assets/avatar/d2b0d8ac6b02437b8b207a398f94b1d.jpg')
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