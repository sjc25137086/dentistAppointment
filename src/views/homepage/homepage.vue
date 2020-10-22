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
                        <p>{{homeInfo[0].dname}}</p>
                        <p>{{homeInfo[0].dposition}}</p>
                    </div>
                </div>
                <div id="icon">
                    <img src="../../assets/icon/collection_n1.png" alt="">
                    <img src="../../assets/icon/share1.png" alt="">
                </div>
            </div>
            <p id="explain">{{homeInfo[0].intro}}</p>
            <mt-navbar v-model="active">
                <mt-tab-item id="1">挂号</mt-tab-item>
                <mt-tab-item id="2">介绍</mt-tab-item>
            </mt-navbar>
            <div id="jian"></div>
        </div>
        <mt-tab-container v-model="active" class="main">
            <mt-tab-container-item id="1">
                <div id="gua">
                    <p>{{this.moment(this.$store.state.dayendtime).format('Y年MM月DD日')}} 星期{{this.moment(this.$store.state.dayendtime).format('e')}}</p>
                </div>
                <mt-cell v-for="(a,i) of am" :key="i" :title="a.hour">
                    <mt-button type="primary" size="small" @click="yuyue(a.hour)" :disabled="isdisabled">预约</mt-button>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="nei">
                    <p>擅长</p>
                    <p>{{homeInfo[0].intro}}</p>
                </div>
                <div class="nei">
                    <p>介绍</p>
                    <p>{{homeInfo[0].description}}</p>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-popup v-model="popupVisible" position="bottom" pop-transition="popup-fade" model id="news">
            <div>
                <div class="portrait"></div>
                <div>
                    <p>医师：<span>{{homeInfo[0].dname}}</span></p>
                    <p>科室：<span>{{homeInfo[0].dposition}}</span></p>
                    <p>费用：<span>{{homeInfo[0].price}}</span></p>
                    <p>时段：<span>{{this.moment(this.$store.state.dayendtime).format('Y年MM月DD日 星期e')+' '+this.q}}</span></p>
                </div>
            </div>
            <!-- <p>请点击下方加号添加就诊人</p>
            <img src="" alt=""> -->
            <mt-button type="primary" size="large" @click="confirm">确认预约</mt-button>
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
        margin-right:10px ;
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
        padding: 10px 0px 10px 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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
        line-height: 20px;
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
            active:"1",
            popupVisible:false,
            homeInfo:[
                {
                    dname:'网络错误',
                    dposition:'网络错误',
                    intro:'网络错误',
                    description:'网络错误',
                    price:'0',
                    
                }
            ],
            am:[
                {hour:'8:00'},
                {hour:'8:30'},
                {hour:'9:00'},
                {hour:'9:30'},
                {hour:'10:00'},
                {hour:'10:30'},
                {hour:'11:00'},
                {hour:'11:30'},
                {hour:'12:00'},
                {hour:'14:00'},
                {hour:'14:30'},
                {hour:'15:00'},
                {hour:'15:30'},
                {hour:'16:00'},
                {hour:'16:30'},
                {hour:'17:00'},
                {hour:'17:30'},
                {hour:'18:00'}
            ],
            isdisabled:false,
            q:'',
            add:[]
        }
    },
    watch:{
    //     myday(){
    //         let myda=new Date();
    //         let myd=myda.getDay()
    //         this.myday=weekday[myd]
    //     }
        // confirm(value){}
    },
    methods:{
        yuyue(i){
            this.popupVisible=true;
            this.q = i;
            console.log(this.add)
            this.add.forEach(item=>{
                console.log(1111111)
                if(item==null){
                    this.isdisabled=false
                }
            })
            //console.log(this.q)
        },
        confirm(){
            //拼接时间格式
            let time=this.moment(this.$store.state.dayendtime).format('Y-MM-DD')+ ' ' + this.q

            //console.log(time)
            //把拼接的时间改为时间戳
            let hoemTime=this.moment(time).unix()
            //console.log(hoemTime)
            this.$store.commit('times',hoemTime)
            this.$router.push('/information')
        }
    },
    mounted(){
        //console.log(this.$store.state.doctorid)
        this.axios.get('/search/doctor',{params:{doctorid:`${this.$store.state.doctorid}`}}).then(res=>{
            this.homeInfo=res.data.result;
            //console.log(this.homeInfo)
        })
        this.axios.get('/search/time',({params:{doctorid:`${this.$store.state.doctorid}`}},{params:{daystarttime:`${this.$store.state.daystarttime}`}},{params:{dayendtime:`${this.$store.state.dayendtime}`}})).then(res=>{
            console.log(res)
            let year=this.moment(this.$store.state.dayendtime).format('Y-MM-DD')
            //console.log(year)
            //console.log(res.data.result,year)
            this.add=res.data.result
            for(let i in this.am){
                let a=year + " " + this.am[i].hour
                let b=this.moment(a).unix()
                console.log(b)
                if(b==res.data.result[0]){
                    this.isdisabled=false;
                }
            }
        })
    }
}
</script>