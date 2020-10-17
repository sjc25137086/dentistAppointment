<template>
    <div>
        <div style="position:fixed;left:0;right:0;top:0;z-index:50">
            <div>
                <mt-header>
                    <router-link to="/" slot="left">
                        <mt-button icon="back"><span>医生主页</span></mt-button>
                    </router-link>
                </mt-header>
            </div>
            <div id="top">
                <div id="jie">
                    <div class="portrait"></div>
                    <div id="text">
                        <p>小红</p>
                        <p>口腔外科/主治医师</p>
                    </div>
                </div>
                <div id="icon">
                    <img src="../../assets/icon/collection_n1.png" alt="">
                    <img src="../../assets/icon/share1.png" alt="">
                </div>
            </div>
            <p id="explain">擅长：复杂阻生齿拔除，口腔外科门诊手术，口腔种植</p>
            <mt-navbar v-model="active">
                <mt-tab-item id="1">挂号</mt-tab-item>
                <mt-tab-item id="2">介绍</mt-tab-item>
            </mt-navbar>
            <div id="jian"></div>
        </div>
        <mt-tab-container v-model="active" class="main">
            <mt-tab-container-item id="1">
                <div id="gua">
                    <p>2020-10-15</p>
                    <p>
                        <span>更多日期</span>
                        <img src="" alt="">
                    </p>
                </div>
                <mt-cell v-for="(a,i) of am" :key="i" :title="a.nei">
                    <mt-button type="primary" size="small" @click="yu">预约</mt-button>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="nei">
                    <p>擅长</p>
                    <p>复杂阻生齿拔除，口腔外科门诊手术，口腔种植</p>
                </div>
                <div class="nei">
                    <p>介绍</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus itaque, quis necessitatibus fuga veniam? Magni, consequuntur debitis ipsum tempora reiciendis animi sunt eum, dicta optio laborum non sapiente consequatur accusantium, quos rerum vel modi fuga fugiat exercitationem nostrum veniam. Vel vero excepturi dolores! Cumque est placeat assumenda doloribus dolorum.</p>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-popup v-model="popupVisible" position="bottom" pop-transition="popup-fade" model id="news">
            <div>
                <div class="portrait"></div>
                <div>
                    <p>医师：<span>小红</span></p>
                    <p>科室：<span>口腔外科</span></p>
                    <p>费用：<span>8.00</span></p>
                    <p>时段：<span>2020-10-17 星期六 AM 8:00~9:00</span></p>
                </div>
            </div>
            <p>请点击下方加号添加就诊人</p>
            <img src="" alt="">
            <mt-button type="primary" size="large" disabled>确认挂号</mt-button>
        </mt-popup>
    </div>
</template>
<style scoped>
    #top{
        background-color: #26a2ff;
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        /* padding-bottom: 10px; */
    }
    #jie{
        display: flex;
    }
    .portrait{
        width: 80px;height: 80px;
        background-color: lightgrey;
        border-radius: 5px;
    }
    #text{
        color: #fff;
        padding: 10px 0 10px 10px;
    }
    #text>p:first-child{
        font-size: 20px;
    }
    #text>p:last-child{
        color: #eee;
        margin-top: 15px;
    }
    #icon>img:first-child,#icon>img:last-child{
        width: 24px;
        margin-left: 10px;
    }
    #explain{
        color: #eee;font-size: 12px;
        background-color: #26a2ff;
        padding: 10px 0px 10px 20px;
    }
    #jian{
        height: 10px;
        background-color: #eeeeee;
    }
    .main{
        margin-top: 230px;
        margin-bottom: 55px;
    }
    .nei{
        padding: 20px 10px;
        border-bottom: 1px solid #eee;
    }
    .nei>p:first-child{
        margin-bottom: 10px;
        font-weight: 600;
    }
    .nei>p:last-child{
        font-size: 14px;
        color: #666;
    }
    #gua,#hour{
        display: flex;
        justify-content: space-between;
        padding: 15px 10px;
        color: #999;font-size: 14px;
        border-bottom: 1px solid #eeeeee;
    }
    #hour{
        font-size: 16px;color: #333;
    }
    #hour>p:last-child span{
        font-size: 14px;color: orange;
    }
    #news{
        width: 100%;
    }
    #news>div{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-bottom: 1px solid #eeeeee;
    }
    #news p{
        font-size: 14px;
    }
    #news p>span{
        font-size: 12px;color: #666;
    }
    #news>div:first-child>div:last-child>p{
        margin-bottom: 6px;
        margin-left: 10px;
    }
    #news>p{
        margin-top: 15px;
    }
</style>
<script>
export default {
    data(){
        return{
            active:2,
            popupVisible:false,
            am:[
                {nei:'8:00',faid:'1'},
                {nei:'9:00',faid:'1'},
                {nei:'10:00',faid:'0'},
                {nei:'11:00',faid:'1'},
                {nei:'12:00',faid:'1'},
            ],
        }
    },
    methods:{
        confirm(){
            this.popupVisible=true
        },
        yu(){
            for(let a in this.am){
                let b=this.am[a].faid;
            }
            // console.log(b)
            // if(b=='1'){
            //         this.$router.push('/information')
            //     }else{
                    
            //     }
        }
    }
}
</script>