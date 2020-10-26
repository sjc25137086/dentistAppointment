<template>
    <div>
        <div style="position:fixed;left:0;right:0;top:0;z-index:50">
            <div>
                <mt-header>
                    <router-link to="/doctor" slot="left">
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
            <mt-navbar v-model="active" style="height:2.5rem">
                <mt-tab-item id="1" > <p>  挂号</p></mt-tab-item>
                <mt-tab-item id="2" ><p>介绍</p></mt-tab-item>
            </mt-navbar>
        </div>
        <mt-tab-container v-model="active" class="main" >
            <mt-tab-container-item id="1">
                <div id="gua">
                <p>{{this.moment(this.$store.state.doctor.daystarttime).format('Y年MM月DD日')}} 星期{{this.moment(this.$store.state.doctor.daystarttime).format('e')==0 ? 7:this.moment(this.$store.state.doctor.daystarttime).format('e')}}</p>
            </div>
                <mt-cell v-for="(elem,i) of timeList" :key="i" :title="elem.hour">
                    <mt-button type="primary" size="small" @click="yuyue(elem.hour)" :disabled="!elem.hastime">预约</mt-button>
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
                    <p>时段：<span>{{this.moment(this.$store.state.doctor.daystarttime).format('Y年MM月DD日 星期e')+' '+this.hour}}</span></p>
                </div>
            </div>
 
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
        margin-top: 63%;
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
            timeList:[
                {hour:'08:00',hastime:true},
                {hour:'08:30',hastime:true},
                {hour:'09:00',hastime:true},
                {hour:'09:30',hastime:true},
                {hour:'10:00',hastime:true},
                {hour:'10:30',hastime:true},
                {hour:'11:00',hastime:true},
                {hour:'11:30',hastime:true},
                {hour:'12:00',hastime:true},
                {hour:'14:00',hastime:true},
                {hour:'14:30',hastime:true},
                {hour:'15:00',hastime:true},
                {hour:'15:30',hastime:true},
                {hour:'16:00',hastime:true},
                {hour:'16:30',hastime:true},
                {hour:'17:00',hastime:true},
                {hour:'17:30',hastime:true},
                {hour:'18:00',hastime:true}
            ],
            isdisabled:false,
            hour:'',
            add:[]
        }
    },
    methods:{
        yuyue(i){
            this.popupVisible=true;
            this.hour = i;
        },
        confirm(){
            if(this.$store.state.vuexhui.userid){
            let time=this.moment(this.$store.state.doctor.dayendtime).format('Y-MM-DD')+ ' ' + this.hour+':00'
            let hoemTime=this.moment(time).unix()*1000
            this.$store.commit('times',hoemTime)
            
            this.$router.push('/information')
            }else{
                this.$toast({
                    message: '请登录'
                });
                setTimeout(()=>{this.$router.push('/login')},2000)
            }
        }
    },
    mounted(){
        this.axios.get('/search/doctor',{params:{'doctorid':`${this.$store.state.doctor.doctorid}`}}).then(res=>{
           
            this.homeInfo=res.data.result;
        })
        this.axios.get('/search/time',{params:{'doctorid':this.$store.state.doctor.doctorid,'daystarttime':this.$store.state.doctor.daystarttime,'dayendtime':this.$store.state.doctor.dayendtime}}).then(res=>{
            let year=this.moment(this.$store.state.doctor.dayendtime).format('Y-MM-DD')
            this.add=res.data.result
            for(let i in this.timeList){
                let a=year + " " + this.timeList[i].hour
                let b=this.moment(a).unix()*1000
                for(let y in res.data.result){
                    if(b==res.data.result[y].time){
                        this.timeList[y].hastime=false;
                    }
                }
            }
        })
    }
}
</script>