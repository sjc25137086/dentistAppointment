<template>
    <div>
        <div>
            <mt-header>
                <router-link to="/" slot="left">
                    <mt-button icon="back"><span>医生主页</span></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div id="top">
            <div id="jie">
                <div id="portrait"></div>
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
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="1">
                <div>
                    <p>2020-10-15</p>
                </div>
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
    </div>
</template>
<style scoped>
    #top{
        background-color: #26a2ff;
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
    }
    #jie{
        display: flex;
    }
    #portrait{
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
    .nei{
        padding: 20px 10px;
    }
    .nei>p:first-child{
        margin-bottom: 10px;
        font-weight: 600;
    }
    .nei>p:last-child{
        font-size: 14px;
        color: #666;
    }
</style>
<script>
export default {
    data(){
        return{
            active:2
        }
    }
}
</script>