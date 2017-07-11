<template>
    <section id="cartPage">
        <header>点击返回要更新购物车状态 购物车</header>
        <div class="card">券</div>
        <cart-list class="cartList" ref="cartList" :list="cartList" :order = "order"></cart-list>
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
        data: function () {
            return {
                cartList: [],
                addOnList: [],
                recommendation: [],
                order: [],
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
                // let sURL = "http://www.fuyj.com.cn/ajax/cart_list.php",
                let sURL = "../data/cart-list.json",
                fnSuccessCallback = (res)=>{
                    let oParsed = JSON.parse(res);
                    this.cartList = oParsed.cart;
                    let self = this;
                    oParsed.cart.forEach((item, index)=>{
                        // self.$refs.cartList.amount[index] = item.amount;
                        // 记录购物车数据
                        // 每条数据搜一个四项数组，分别为：产品id、规格、数量、选中状态
                        // 提交订单时只需要这四项数据
                        this.order.push([item.id, item.spec, item.amount, true]);
                    });

                    this.addOnList = oParsed.add_on;
                    this.recommendation = oParsed.recommend;
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
    .card, .cartList, .add-on, .recommendation{
        margin-top: 10px;
    }
    .card{
        height: 56px;
        background: white;
    }
    .cartList{
    }
    .add-on{
    }
    .recommendation{

    }
}

</style>
