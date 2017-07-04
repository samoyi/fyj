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
    @import "../scss/common.scss";
    // z-index: 9;
    width: 100%; height: $headerHeight;
    background-color: yellow;
    // position: fixed; top: 0;
    .logo, .navMenu, .user, .cart{
        position: absolute;
    }
    .logo{
        width: 65px; height: 37px;
        left: 50%;
        margin-left: -32px;
        top: ($headerHeight - 37px)/2;
    }
    .navMenu{
        width: 23px; height: 30px;
        background-color: red;
        left: 10px; top: ($headerHeight - 30px)/2;
    }
    .user{
        width: 18px; height: 21px;
        right: 70px;
        background-color: red;
        top: ($headerHeight - 21px)/2;
    }
    .cart{
        width: 23px; height: 21px;
        right: 16px;
        background-color: red;
        top: ($headerHeight - 21px)/2;
    }
    >nav{
        position: fixed;
        width: 100%; height: 300px;
        background-color: white;
    }
}
</style>
