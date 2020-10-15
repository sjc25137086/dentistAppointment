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
      <mt-button type="primary" size="small">选择地区</mt-button>
    </div>
    <div>
      <mt-tab-container>
        <mt-tab-container-item>
          <!-- 单一文章开始 -->
          <div class="article">
            <!-- 标题链接开始 -->
            <div class="article-subject">
              今天台湾内部上演的一切都只具有临时意义
            </div>
            <!-- 标题链接结束 -->
            <!-- 缩略图简介开始 -->
            <div class="article-wrapper">
              <div class="article-image">
                <img
                  src="../assets/images/a0bba2ce-8e21-11ea-89ba-482ae31b2081.jpg"
                  alt=""
                />
              </div>
              <div class="article-desc">
                欧阳娜娜、张韶涵这样的年轻艺人不要怕那些势力。那些势力表面上猖狂，实际上他们中的骨干分子越来越焦虑，对未来感到迷茫，现实中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。
              </div>
            </div>

            <!-- 缩略图简介结束 -->
            <!-- 单一文章结束 -->
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div>
      <mt-tab-container>
        <mt-tab-container-item>
          <!-- 单一文章开始 -->
          <div class="article">
            <!-- 标题链接开始 -->
            <div class="article-subject">
              今天台湾内部上演的一切都只具有临时意义
            </div>
            <!-- 标题链接结束 -->
            <!-- 缩略图简介开始 -->
            <div class="article-wrapper">
              <div class="article-image">
                <img
                  src="../assets/images/a0bba2ce-8e21-11ea-89ba-482ae31b2081.jpg"
                  alt=""
                />
              </div>
              <div class="article-desc">
                欧阳娜娜、张韶涵这样的年轻艺人不要怕那些势力。那些势力表面上猖狂，实际上他们中的骨干分子越来越焦虑，对未来感到迷茫，现实中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。中的嚣张形同他们的吗啡。台湾的情况肯定要根本改变，那些站祖国统一的台湾年轻人，老胡想说：你们等得起。
              </div>
            </div>

            <!-- 缩略图简介结束 -->
            <!-- 单一文章结束 -->
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div>
      <mt-tabbar fixed>
        <mt-tab-item id="index">
          <!-- <img src="../assets/images/wjx.png" slot="icon" v-if="tabbar == 'index'"> -->
          <img src="../assets/images/wjx.png" slot="icon" />
        </mt-tab-item>
        <p class="tabbar_info">______________</p>
        <mt-tab-item id="me">
          <!-- <img src="../assets/images/wjx.png" slot="icon" v-if="tabbar == 'me'"> -->
          <img src="../assets/images/wjx.png" slot="icon" />
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- --------------------------------------------------------------------------------------------- -->
    <mt-picker :slots="slots" @change="onValuesChange" class="Picker_to"></mt-picker>
  </div>
</template>

<script>
export default {
  methods: {
    onValuesChange(picker, values) {
      if (values[9] > values[9]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    
  },
  data() {
    return {
      slots: [
        {
          flex: 2,
          values: ["湖北省", "湖南省", "东北省", "甘肃省"],
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
          values: [
            "武汉市",
            "黄石市",
            "十堰市",
            "宜昌市",
            "襄阳市",
            "荆门市",
            "孝感市",
            "荆州市",
            "黄冈市",
            "咸宁市",
            "随州市",
          ],
          className: "slot3",
          textAlign: "left",
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 3,
          values: [
            "江岸区",
            "江汉区",
            "硚口区",
            "汉阳区",
            "武昌区",
            "青山区",
            "洪山区",
            "蔡甸区",
            "江夏区",
            "黄陂区",
            "新洲区",
            "东西湖区",
          ],
          className: "slot3",
          textAlign: "left",
        },
      ],
    };
  },
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
/* 文章容器 */
.article {
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
  margin: 10px;
}
/* 文章标题 */
.article-subject {
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  font-family: "Microsoft Yahei";
  color: #1a1a1a;
  margin-bottom: 10px;
}
/* 缩略图及简介容器 */
.article-wrapper {
  display: flex;
  align-items: center;
}
/* 缩略图容器 */
.article-image {
  margin-right: 15px;
}
.article-image img {
  width: 112px;
  border-radius: 5px;
}
/* 文章简介容器 */
.article-desc {
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  height: 63px;
  overflow: hidden;
}
.tabbar_info {
  border-bottom: 5px solid #161823;
}
.Picker_to{
  margin-left: 45px;
  /* display: none; */
}
</style>


