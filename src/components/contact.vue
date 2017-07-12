<template>
    <section :style="{height:height+'px'}" id="contactPage">
        <app-header :cart-amount="cartAmount"></app-header>
        <div class="logoArea">
            <i class="logo"></i>
        </div>
        <section class="contact">
            <p class="loc">
                <i></i>  地址：南京江宁竹山南路605号
            </p>
            <p class="tel">
                <i></i>  服务电话：<a href="tel:4006633677">4006-633-677</a>
            </p>
        </section>
    </section>
</template>

<script>
    import header from "./common/header.vue";
    import bottom from "./common/bottom.vue";

    import {nWindowHeight, nHeaderHeight} from "../js/common.js";

    export default {
        props: ["cartAmount"],
        data: function () {
            return {
                height: nWindowHeight-nHeaderHeight,
            }
        },
        components: {
          "app-header": header,
          "app-bottom": bottom,
        },
    };


</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#contactPage{
    background: white;
    .logoArea{
        height: 275px;
        background: white;
        margin-top: $headerHeight;
        position: relative;
        .logo{
            width: 160px; height: 160px;
            position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                position: -341px -389px;
                size: 761px 809px;
            }
        }
    }
    .contact{
        i{
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                size: 761px 809px;
            }
            width: 22px;
            height: 22px;
            display: block;
            position: absolute;
            left: -26px; top: 0;
        }
        p{
            color: #1e1e1e; font-size: 12px;
            margin-bottom: 14px; margin-left: 100px;
            height: 22px; line-height: 22px;
        }
        .loc{
            i{
                background-position: -155px -175px;
            }
        }
        .tel{
            i{
                background-position: -88px -127px;
            }
            a{
                text-decoration: none;
                color: #1e1e1e;
            }
        }
    }
}
</style>
