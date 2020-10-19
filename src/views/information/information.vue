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
                    <input type="radio" name="fsex" value="1"> 男
                    <input type="radio" name="fsex" value="0"> 女
                </div>
            </div>
            <mt-field type="text" label="身份证号码" placeholder="请输入您的身份证号码" :attr="{maxlength:18,autocomplete:'off'}" v-model="isCard" @blur.native.capture="checkIsCard" :state="isCardState"></mt-field>
            <mt-field type="number" label="电话号码" placeholder="请输入您的电话号码" :attr="{maxlength:11,autocomplete:'off'}" v-model="phone" @blur.native.capture="checkPhone" :state="phoneState"></mt-field>
        </div>
        <div id="button">
            <mt-button type="primary" size="large" @click="determine">确定挂号</mt-button>
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
    #sex div>input{
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
            isCard:'',//身份证号码
            isCardState:'',//身份证状态
            phone:'',//电话号码
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
        },
        //校验身份证
        checkIsCard(){
            let isCardRegExp=/^[1][0-9]{14}([0-9]{2}[0-9X])*$/;
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
            let phoneRegExp=/^[1][3-9][0-9]{9}$/;
            if(phoneRegExp.test(this.phone)){
                this.phoneState="success";
                return true;
            }else{
                this.$toast('电话号码输入格式不正确');
            }
            this.phoneState="error";
            return false;
        },
        determine(){}
    }
}
</script>