<template>
    <section id="userPage">
        <user-header class="header" :cart-amount="cartAmount"></user-header>
        <user-menu class="menu" :cur-index="curIndex"></user-menu>
        <user-order class="order" v-if="0===curIndex" :list="orderList"></user-order>
        <user-card class="card" v-if="1===curIndex" :list="cardList"></user-card>
        <user-addr class="addr" v-if="2===curIndex" :list="addrList" :default-index="defaultAddrIndex"></user-addr>
        <user-message class="message" v-if="3===curIndex" :list="messageList"></user-message>
    </section>
</template>

<script>

    import header from "./user/header.vue";
    import menu from "./user/menu.vue";
    import order from "./user/order.vue";
    import card from "./user/card.vue";
    import addr from "./user/addr.vue";
    import message from "./user/message.vue";

    import {AJAX_GET} from "../js/common.js";


    export default {
        props: ["cartAmount"],
        data: function () {
            return {
                tel: null,
                curIndex: 0,
                orderList: null,
                cardList: null,
                addrList: null,
                defaultAddrIndex: null,
                messageList: null,
            }
        },
        components: {
          "user-header" : header,
          "user-menu" : menu,
          "user-order" : order,
          "user-card" : card,
          "user-addr" : addr,
          "user-message": message,
        },
        mounted: function(){
            if( this.$parent.userData ) // 已经自动登录
            {
                let oUserData = this.$parent.userData;
                this.orderList = oUserData.order;
                this.cardList = oUserData.card;
                this.addrList = oUserData.addr;
                this.defaultAddrIndex = oUserData.addr.findIndex((item)=>item.isDefault);
                this.messageList = oUserData.message;
            }
            else{
                let sURL = "../data/user.json",
                    fnSuccessCallback = (res)=>{
                        let oParsed = JSON.parse(res);
                        this.orderList = oParsed.order;
                        this.cardList = oParsed.card;
                        this.addrList = oParsed.addr;
                        this.defaultAddrIndex = oParsed.addr.findIndex((item)=>item.isDefault);
                        this.messageList = oParsed.message;

                        this.$parent.cartList = oParsed.cart.length;
                    };
                AJAX_GET(sURL, fnSuccessCallback);
            }
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
