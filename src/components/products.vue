<template>
    <section id="productPage">
        <app-header :index="2" :cart-amount="cartAmount"></app-header>
        <h2>| 遇见心  方知味 |<br />PRODUCTS</h2>
        <section class="list">
            <div class="product" v-for="item in list">
                <img :src="item.url" :alt="item.name" />
                <p class="name">{{item.name}}</p>
                <p class="des" v-html="item.des"></p>
                <p class="price">
                    <span>¥</span>
                    <span class="num">{{item.price}}</span>
                    <span>/{{item.spec}}</span>
                </p>
                <i></i>
            </div>
            <div style="clear:both;"></div>
        </section>
        <app-bottom></app-bottom>
    </section>
</template>

<script>
    import header from "./common/header.vue";
    import bottom from "./common/bottom.vue";

    import {AJAX_GET} from "../js/common.js";

    export default {
        props: ["cartAmount"],
        data: function () {
            return {
                list: null,
            }
        },
        components: {
          "app-header": header,
          "app-bottom": bottom,
        },
        mounted: function(){
            // 加载 数据
            {
                let sURL = "../data/products.json",
                fnSuccessCallback = (res)=>{
                    this.list = JSON.parse(res);
                };
                AJAX_GET(sURL, fnSuccessCallback);
            }
        },
    };


</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#productPage{
    H2{
        font-size: 14px;
        line-height: 20px;
        position: absolute;
        top: 88px;
        width: 100%;
        text-align: center;
    }

    .list{
        width: 94%;
        margin: 155px auto auto 3%;
        >div:nth-child(even){
            margin-left: 2%;
        }
        .product{
            position: relative;
            background-color: white;
            float: left;
            margin-bottom: 5px;
            width: 49%; height: 263px;
            >img{
                width: 100%; height: 172px;
            }
            >p{
                text-align: left;
                margin-left: 14px;
            }
            .name{
                text-align: left;
                font-size: 12px;
                margin-top: 12px auto auto 14px;
            }
            .des{
                font-size: 11px;
                color: #9b9b9b;
                margin: 10px auto auto 14px;
            }
            .price{
                font-size: 12px;
                color: #17919f;
                margin: 10px auto auto 14px;
            }
            >i{
                width: 22px; height: 22px;
                position: absolute;
                right: 14px; bottom: 9px;
                background:{
                    image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                    position: -14px -143px;
                    size: 761px 809px;
                }
            }
            >div{
                width: 118px; height: 1px;
                background-color:  #9b9b9b;
                position: absolute;
                right: 14px; bottom: 0px;
                span{
                    display: block;
                    width: 25px; height: 100%;
                    float: right;
                    background-color: #1e1e1e;
                }
            }
        }
    }
}
</style>
