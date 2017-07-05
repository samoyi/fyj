<template>
    <header>
        <span class="navMenu" @click="displayNav"></span>
        <img class="logo" src="http://www.fuyj.com.cn/front/images/logo.png" alt="浮遇纪" />
        <span class="user"></span>
        <div class="cart">
            <span>1</span>
        </div>
        <nav v-show="bNavDisplay" @click="displayNav"></nav>
    </header>
</template>

<script>

    export default {
        data: function () {
            return {
                bNavDisplay: false,
            };
        },
        methods: {
            displayNav(){
                this.bNavDisplay = !this.bNavDisplay;
            },
        },
    };

</script>

<style lang="scss" scoped>
header{
    @import "../../scss/common.scss";
    width: 100%; height: $headerHeight;
    position: fixed; top: 0;
    z-index: 9;
    background-color: white;
    .logo, .navMenu, .user, .cart{
        position: absolute;
    }
    .logo{
        width: 65px; height: 37px;
        left: 50%;
        margin-left: -32px;
        top: ($headerHeight - 37px)/2;
    }
    .navMenu, .user, .cart{
        width: 22px; height: 22px;
        background: {
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
            size: 761px 809px;
        }
    }
    .navMenu{
        left: 10px; top: ($headerHeight - 30px)/2;
        background-position: -14px -15px;
    }
    .user{
        right: 70px;
        top: ($headerHeight - 21px)/2;
        background-position: -14px -47px;
    }
    .cart{
        right: 16px;
        top: ($headerHeight - 21px)/2;
        background-position: -14px -79px;
        span{
            width: 14px;
            height: 14px;
            line-height: 14px;
            background-color: red;
            color: white;
            border-radius: 50%;
            text-align: center;
            display: block;
            font-size: 8px;
            position: absolute;
            right: -6px;
            top: -2px;
        }
    }
    >nav{
        position: fixed;
        width: 100%; height: 300px;
        background-color: white;
    }
}
</style>
