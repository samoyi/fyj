<template>
    <section id="cartPage">
        <header>点击返回要更新购物车状态 购物车</header>
        <div class="card">券</div>
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

    import {AJAX_GET} from "../js/common.js";

    export default {
        data: function () {
            return {
                cartList: [],
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

            // 加载 购物车的数据
            {
                let sURL = "../data/cart-list.json",
                fnSuccessCallback = (res)=>{
                    this.cartList = JSON.parse(res);
                    let self = this;
                    this.cartList.forEach((item, index)=>{
                        self.$refs.cartList.amount[index] = item.amount;
                    });
                };
                AJAX_GET(sURL, fnSuccessCallback);
            }

            // 加载 加价购的数据
            {
                let sURL = "../data/add-on.json",
                fnSuccessCallback = (res)=>{this.addOnList = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }

            // 加载 加价购的数据
            {
                let sURL = "../data/recommendation.json",
                fnSuccessCallback = (res)=>{this.recommendation = JSON.parse(res);};
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
