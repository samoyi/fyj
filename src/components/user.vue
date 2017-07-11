<template>
    <section id="userPage">
        <user-header class="header"></user-header>
        <user-menu class="menu" :cur-index="curIndex"></user-menu>
        <user-order class="order" v-if="0===curIndex" :list="orderList"></user-order>
        <user-card class="card" v-if="1===curIndex" :list="cardList"></user-card>
        <user-addr class="addr" v-if="2===curIndex" :list="addrList"></user-addr>
    </section>
</template>

<script>

    import header from "./user/header.vue";
    import menu from "./user/menu.vue";
    import order from "./user/order.vue";
    import card from "./user/card.vue";
    import addr from "./user/addr.vue";

    import {AJAX_GET} from "../js/common.js";


    export default {
        data: function () {
            return {
                tel: null,
                curIndex: 0,
                orderList: null,
                cardList: null,
                addrList: null,
            }
        },
        components: {
          "user-header" : header,
          "user-menu" : menu,
          "user-order" : order,
          "user-card" : card,
          "user-addr" : addr,
        },
        mounted: function(){
    
            // 加载 订单的数据
            {
                let sURL = "../data/order.json",
                    fnSuccessCallback = (res)=>{this.orderList = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }

            // 加载 卡券的数据
            {
                let sURL = "../data/card.json",
                    fnSuccessCallback = (res)=>{this.cardList = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }

            // 加载 地址的数据
            {
                let sURL = "../data/addr.json",
                    fnSuccessCallback = (res)=>{this.addrList = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }

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
