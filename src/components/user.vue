<template>
    <section id="userPage">
        <user-header class="header"></user-header>
        <user-menu class="menu"></user-menu>
        <section>
        </section>
    </section>
</template>

<script>

    import header from "./user/header.vue";
    import menu from "./user/menu.vue";
    import {AJAX_GET} from "../js/common.js";


    export default {
        data: function () {
            return {
            }
        },
        components: {
          "user-header" : header,
          "user-menu" : menu,
        },
        mounted: function(){

            // // 加载 购物车的数据
            // {
            //     let sURL = "../data/cart-list.json",
            //     fnSuccessCallback = (res)=>{
            //         let oParsed = JSON.parse(res);
            //         this.cartList = oParsed;
            //         let self = this;
            //         oParsed.forEach((item, index)=>{
            //             // self.$refs.cartList.amount[index] = item.amount;
            //             // 记录购物车数据
            //             // 每条数据搜一个四项数组，分别为：产品id、规格、数量、选中状态
            //             // 提交订单时只需要这四项数据
            //             this.order.push([item.id, item.spec, item.amount, true]);
            //         });
            //     };
            //     AJAX_GET(sURL, fnSuccessCallback);
            // }
            //
            // // 加载 加价购的数据
            // {
            //     let sURL = "../data/add-on.json",
            //     fnSuccessCallback = (res)=>{this.addOnList = JSON.parse(res);};
            //     AJAX_GET(sURL, fnSuccessCallback);
            // }
            //
            // // 加载 加价购的数据
            // {
            //     let sURL = "../data/recommendation.json",
            //     fnSuccessCallback = (res)=>{this.recommendation = JSON.parse(res);};
            //     AJAX_GET(sURL, fnSuccessCallback);
            // }

        },
    };



</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#userPage{
    width: 100%;
    .header{
        width: 100%;
        position: relative; top: 0;
        background-color: royalblue;
    }
    .menu{
        margin-top: 0;
    }
}

</style>
