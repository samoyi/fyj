<template>
    <section id="cartPage">
        <header>点击返回要更新购物车状态 购物车</header>
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
                // order: [],
            }
        },
        components: {
            "cart-list" : cartList,
            "add-on": addOn,
            "recommendation-products": recommendation,
            "place-order": placeOrder,
        },
        mounted: function(){

            // {
            //     // 直接从购物车页面进入应用，且自动登录的情况下
            //     // 代码执行到这里的时候，异步请求用户数据尚未取回，购物车为空
            //     // 加载用户数据
            //     // 包括购物车、订单、优惠券、地址、消息
            //     let sURL = "../data/user.json",
            //         fnSuccessCallback = (res)=>{
            //             let oParsed = JSON.parse(res);
            //             this.userData = oParsed;
            //             this.cartList = oParsed.cart;
            //         };
            //     AJAX_GET(sURL, fnSuccessCallback);
            // }
            //
            // this.cartList = this.$parent.cartList;
            // this.cartList.forEach((item, index)=>{
            //     // self.$refs.cartList.amount[index] = item.amount;
            //     // 记录购物车数据
            //     // 每条数据搜一个四项数组，分别为：产品id、规格、数量、选中状态
            //     // 提交订单时只需要这四项数据
            //     this.order.push([item.id, item.spec, item.amount, item.checked]);
            // });

            {
                // let sURL = "http://www.fuyj.com.cn/ajax/cart_list.php",
                let sURL = "../data/cart-list.json",
                fnSuccessCallback = (res)=>{
                    let oParsed = JSON.parse(res);


                    // let self = this;

                    this.cardInfo = oParsed.cardInfo;
                    this.addOnList = oParsed.add_on;
                    this.recommendation = oParsed.recommend;

                    // this.$parent.cartAmount = oParsed.cart.length;
                };
                AJAX_GET(sURL, fnSuccessCallback);
            }
        },
    };



</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#cartPage{
    width: 100%;
    // position: fixed; top: 0; z-index: 9;
    >header{
        height: $headerHeight; line-height: $headerHeight;
        font-size: 17px; text-align: center;
        background: white;
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
