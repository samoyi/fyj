<template>
    <section id="cartPage">
        <header>
            <span @click="back">返回</span>
            <h2>购物车</h2>
        </header>
        <div class="cardInfo" v-if="cardInfo">
            <i></i>
            <p>{{cardInfo}}</p>
        </div>
        <cart-list class="cartList" ref="cartList" :list="cartList"></cart-list>
        <add-on class="add-on" :list="addOnList"></add-on>
        <recommendation-products class="recommendation" :list="recommendation"></recommendation-products>
        <place-order></place-order>
    </section>
</template>

<script>

    import cartList from "./cart/cart-list.vue";
    import addOn from "./cart/add-on.vue";
    import recommendation from "./cart/recommendation.vue";
    import placeOrder from "./cart/placeOrder.vue";
    import {AJAX_GET, AJAX_POST} from "../js/common.js";

    export default {
        props: ["cartList"],
        data: function () {
            return {
                cardInfo: "",
                addOnList: [],
                recommendation: [],
            }
        },
        components: {
            "cart-list" : cartList,
            "add-on": addOn,
            "recommendation-products": recommendation,
            "place-order": placeOrder,
        },
        mounted: function(){
            {
                let sURL = "http://www.fuyj.com.cn/ajax/cartPage.php",
                // let sURL = "../data/cartPage.json",
                fnSuccessCallback = (res)=>{
                    let oParsed = JSON.parse(res);

                    this.cardInfo = oParsed.cardInfo;
                    this.addOnList = oParsed.add_on;
                    this.recommendation = oParsed.recommend;
                };
                AJAX_GET(sURL, fnSuccessCallback);
            }
        },
        methods: {
            back(){
                history.back();
            },
        },
    };



</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#cartPage{
    width: 100%;
    >header{
        height: $headerHeight; line-height: $headerHeight;
        font-size: 17px; text-align: center;
        background: white;
        font-weight: bold;
        span{
            font-size: 15px;
            line-height: $headerHeight;
            margin-left: 14px;
            float: left;
        }
        h2{
            width: 100%; line-height: $headerHeight;
        }
    }
    .cardInfo, .cartList, .add-on, .recommendation{
        margin-top: 10px;
    }
    .cardInfo{
        height: 56px;
        background: white;
        position: relative;
        i{
            width: 17px; height: 30px;
            position: absolute; left: 21px; top: 1px;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                position: -88px -239px;
                size: 761px 809px;
            }
        }
        p{
            width: 75%;
            position: absolute;
            left: 15%;
            font-size: 12px;
            top: 10px;
            line-height: 16px;
            color: #9b9b9b;
        }
    }
    .cartList{
    }
    .add-on{
    }
    .recommendation{

    }
}

</style>
