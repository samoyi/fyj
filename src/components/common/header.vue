<template>
    <header>
        <span class="navMenu" @click="switchDisplayNav"></span>
        <img class="logo" src="http://www.fuyj.com.cn/front/images/logo.png" alt="浮遇纪" />
        <!-- <span class="user"></span> -->
        <router-link class="user" to="/user"></router-link>
        <router-link class="cart" to="/cart">
            <span v-if="cartAmount">{{cartAmount}}</span>
        </router-link>
        <nav @click="switchDisplayNav" v-show="bNavDisplay" :style="{height:height+'px'}">
            <i @click="switchDisplayNav">╳</i>
            <ul>
                <li><router-link :class="{curColor: 0===index}" to="/">首 页 INDEX</router-link></li>
                <li><router-link :class="{curColor: 1===index}" to="/">新 遇 NEWS</router-link></li>
                <li><router-link :class="{curColor: 2===index}" to="/product">再 遇 PRODUCTS</router-link></li>
                <li><router-link :class="{curColor: 3===index}" to="/">礼 遇 EXCLUSIVE</router-link></li>
                <li><router-link :class="{curColor: 4===index}" to="/aboutus">相 遇 ABOUT US</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import {nWindowHeight} from "../../js/common.js";

    export default {
        props: ["index", "cartAmount"],
        data: function () {
            return {
                bNavDisplay: false,
                height: nWindowHeight,
            };
        },
        methods: {
            switchDisplayNav(){
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
        background-color: rgba(255,255,255, 0.95);
        font-size: 14px;
        i{
            position: absolute; top: 20px; right: 20px;
            font-size: 26px;
        }
        ul{
            width: 100%;
            position: absolute; top: 104px;
            li{
                a{
                    color: #9b9b9b;
                    text-decoration: none;
                }
                .curColor{
                    color: #17919f;
                }
                text-align: center;
                height: 77px; line-height: 77px;
            }
        }
    }
}
</style>
