<template>
    <div id="page">
        <div>
            <mt-header title="就诊人信息">
                <router-link to="/homepage" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div>
            <mt-field type="text" label="姓名" placeholder="请输入您的姓名" :attr="{maxlength:10}" v-model="fname" @blur.native.capture="checkFname" :state="fnameState"></mt-field>
            <mt-field type="number" label="年龄" placeholder="请输入您的年龄" :attr="{ oninput: 'if(value.length>3)value=value.slice(0,3)' }" v-model="fage" @blur.native.capture="checkFage" :state="fageState"></mt-field>
            <div id="sex">
                <p>性别</p>
                <div>
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
            <mt-field type="number" label="电话号码" placeholder="请输入您的电话号码" :attr="{ oninput: 'if(value.length>11)value=value.slice(0,11)' }" v-model="inPhone" @blur.native.capture="checkPhone" :state="phoneState"></mt-field>
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
    }
    #sex div{
        width: 71%;height: 27px;
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
            fname:'',
            fnameState:'',
            fage:'',
            fageState:'',
            checkedValue:'',
            sex:'',
            isCard:'',
            isCardState:'',
            inPhone:'',
            phoneState:'',
        }
    },
    methods:{
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
            let fageRegExp=/^[0-9]{1,3}$/;
                if(fageRegExp.test(this.fage)){
                    this.fageState="success";
                }else{
                    this.$toast('年龄填写不正确')
                    this.fageState="error";
                }
        },
        //性别
        checkFsex(){
            let sex=document.querySelectorAll('.userSex input')
            //console.log(sex)
            if(this.checkedValue==1){
                sex[0].checked=true;
            }
            if(this.checkedValue==0){
                sex[1].checked=true;
            }
        },
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
            let time=this.$store.state.time
            console.log(time)
            if(this.checkFname() && this.checkIsCard() && this.checkPhone()){
                this.axios.post('/user/forward',`doctorid=${this.$store.state.doctorid}&fname=${this.fname}&fage=${this.fage}&fsex=${this.checkedValue}&idCard=${this.isCard}&phone=${this.inPhone}&userid=${this.$store.state.userid}&time=${time}`).then(res=>{
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