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
            <mt-field type="text" label="姓名" placeholder="请输入您的姓名" :attr="{maxlength:10}" v-model="fname"></mt-field>
            <mt-field type="date" label="年龄" placeholder="Input birthday"></mt-field>
            <div id="sex">
                <p>性别</p>
                <div>
                    <input type="radio" name="fsex" value="1"> 男
                    <input type="radio" name="fsex" value="0"> 女
                </div>
            </div>
            <mt-field type="text" label="身份证号码" placeholder="请输入您的身份证号码" :attr="{maxlength:18,autocomplete:'off'}" v-model="isCard"></mt-field>
            <mt-field type="number" label="电话号码" placeholder="请输入您的电话号码" :attr="{maxlength:11,autocomplete:'off'}" v-model="phone"></mt-field>
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
            isCard:'',//身份证号码
            phone:''//电话号码
        }
    },
    methods:{
        determine(){}
    }
}
</script>