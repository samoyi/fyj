<template>
    <section id="cartPage">
        <header></header>
        <div></div>
        <cart-list :list="newProducts"></cart-list>
    </section>
</template>

<script>
// 点击返回，AJAX保存购物车状态
// 点击下单，AJAX更新购物车状态
    import cartList from "./cart/cart-list.vue";

    import {AJAX_GET} from "../js/common.js";

    export default {
        data: function () {
            return {
                total: 0,
            }
        },
        components: {
          "cart-list": cartList,
        },
        mounted: function(){


            // 加载 新产品的数据
            {
                // let sURL = "../data/newProducts.json",
                // fnSuccessCallback = (res)=>{this.newProducts = JSON.parse(res);};
                // AJAX_GET(sURL, fnSuccessCallback);
            }

        },
    };



</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#indexPage{
    width: 100%;
    position: absolute; top: $headerHeight;
    .threeCard{
        height: 2300px; overflow: hidden;
        >div{
            height: 690px;
        }
    }
}

</style>
