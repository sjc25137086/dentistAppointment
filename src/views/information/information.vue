<template>
    <div id="page">
        <div>
            <mt-header title="就诊人信息">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div id="banner"></div>
        <div>
            <mt-field type="text" label="姓名" placeholder="请输入您的姓名" :attr="{maxlength:10}" v-model="fname" @blur.native.capture="checkFname" :state="fnameState"></mt-field>
            <mt-field type="date" label="年龄" placeholder="Input birthday" @blur.native.capture="checkFage" v-model="fage"></mt-field>
            <div id="sex">
                <p>性别</p>
                <div>
                    <!-- <input type="radio" name="fsex" value="1" v-model="sex"> 男
                    <input type="radio" name="fsex" value="0" v-model="sex"> 女 
                    -->
                    <!-- <input type="radio" name="fsex" v-for="(item,index) in list" :key="index" :value="item.value" v-model="checkedValue" @blur="checkFsex">{{sex}} -->
                    <div class="userSex">
                        <label>
                            <input type="radio" name="fsex" v-model="checkedValue" @focus="checkFsex" value="1">男
                        </label>
                        <label>
                            <input type="radio" name="fsex" v-model="checkedValue" @focus="checkFsex" value="0">女
                        </label>
                    </div>
                </div>
            </div>
            <mt-field type="text" label="身份证号码" placeholder="请输入您的身份证号码" :attr="{maxlength:18,autocomplete:'off'}" v-model="isCard" @blur.native.capture="checkIsCard" :state="isCardState"></mt-field>
            <mt-field type="number" label="电话号码" placeholder="请输入您的电话号码" :attr="{maxlength:11}" v-model="inPhone" @blur.native.capture="checkPhone" :state="phoneState"></mt-field>
        </div>
        <div id="button">
            <mt-button type="primary" size="large" @click="determine">确定预约</mt-button>
        </div>
    </div>
</template>
<style scoped>
    #banner{
        width: 100%;
        height: 100px;
        background-color: lightgreen;
    }
    #sex{
        display: flex;
        height: 48px;
        padding: 0 10px;
        line-height: 48px;
        justify-content: space-between;
        /* border-top: 1px solid #ccc; */
    }
    #sex div{
        width: 250px;height: 27px;
    }
    #sex div>label:last-child{
        margin-left: 10px;
    }
    #button{
        margin-top: 30px;
    }
</style>
<script>
export default {
    data(){
        return{
            fname:'',//姓名
            fnameState:'',//姓名状态
            fage:'',//年龄
            checkedValue:'',
            // list:[
            //     {value:1},
            //     {value:0}
            // ],
            sex:'',
            isCard:'',//身份证号码
            isCardState:'',//身份证状态
            inPhone:'',//电话号码
            phoneState:'',//电话号码状态
        }
    },
    methods:{
        //校验姓名
        checkFname(){
            let fnameRegExp=/^[\u4e00-\u9fa5A-Za-z]{2,10}$/;
            if(fnameRegExp.test(this.fname)){
                this.fnameState="success";
                return true;
            }else{
                this.$toast('姓名填写格式不正确');
            }
            this.fnameState="error";
            return false;
        },
        //年龄
        checkFage(){
            let age=this.fage.split(/-/g)[0];
            let year=new Date().getFullYear();
            let fage=parseInt(year-age);
            if(fage<0){
                this.$toast('生日填写不正确');
                return false;
            }
            if(fage>=0){
                return true;
            }
        },
        //性别
        checkFsex(){
            let sex=document.querySelectorAll('.userSex input')
            console.log(sex)
            if(this.checkedValue==1){
                sex[0].checked=true;
            }
            if(this.checkedValue==0){
                sex[1].checked=true;
            }
            // console.log(this.checkedValue)
        },
        //校验身份证
        checkIsCard(){
            let isCardRegExp=/^[0-9]{15}([0-9]{2}[0-9X])*$/;
            if(isCardRegExp.test(this.isCard)){
                this.isCardState="success";
                return true;
            }else{
                this.$toast('身份证输入格式不正确');
            }
            this.isCardState="error";
            return false;
        },
        //校验电话号码
        checkPhone(){
            let phoneRegExp=/^1[3-9]\d{9}$/;
            if(phoneRegExp.test(this.inPhone)){
                this.phoneState="success";
                return true;
            }else{
                this.$toast('电话号码输入格式不正确');
            }
            this.phoneState="error";
            return false;
        },
        determine(){
            if(this.checkFname() && this.checkFage() && this.checkIsCard() && this.checkPhone()){
                this.axios.post('/user/forward',`doctorid=1&fname=${this.fname}&fage=${this.fage}&fsex=${this.checkedValue}&idCard=${this.isCard}&phone=${this.inPhone}&userid=1&time=160346895214`).then(res=>{
                    if(res.data.code==200){
                        this.$messagebox("预约信息","恭喜，预约成功")
                        this.$router.push('/Yuyue');
                    }else{
                        this.$messagebox("预约信息","抱歉，您填写的信息有误");
                    }
                })
            }
        }
    }
}
</script>