<template>
    <header>
        <span class="back" @click="back">返回</span>
        <span class="logout" v-if="false">退出登录</span>
        <img alt="头像"/>
        <span class="nickname">昵称</span>
    </header>
</template>

<script>

export default {
    data(){
        return {};
    },
    methods: {
        back(){
            this.$router.push('/');
        },
    },
};

</script>

<style lang="scss" scoped>
header{
    height: 175px;
    background:{
        image: url("http://localhost/gits/fyj/data/image/colorfulBg.jpg");
        size: cover;
    }
    .back{
        position: absolute;
        top: 14px; left: 12px;
        font-size: 14px;
    }
    .logout{
        position: absolute;
        top: 14px; right: 12px;
        color: #17919f;
        border-radius: 50px/50px;
        background-color: white;
        padding: 8px;
        font-size: 12px;
    }
    img{
        width: 60px; height: 60px;
        display: block;
        position: absolute;
        top: 52px;
        left: 50%; margin-left: -30px;
    }
    .nickname{
        width: 100%;
        text-align: center;
        display: block;
        font-size: 12px;
        position: absolute;
        top: 122px;
        color: #9b9b9b;
    }
}
</style>
