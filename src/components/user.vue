<template>
    <section id="userPage" v-if="userData">
        <user-header class="header"></user-header>
        <user-menu class="menu" :cur-index="curIndex"></user-menu>
        <user-order class="order" v-if="0===curIndex" :list="userData.order"></user-order>
        <user-card class="card" v-if="1===curIndex" :list="userData.card"></user-card>
        <user-addr class="addr" v-if="2===curIndex" :list="userData.addr" :default-index="defaultAddrIndex"></user-addr>
        <user-message class="message" v-if="3===curIndex" :list="userData.message"></user-message>
    </section>
</template>

<script>

import header from './user/header.vue';
import menu from './user/menu.vue';
import order from './user/order.vue';
import card from './user/card.vue';
import addr from './user/addr.vue';
import message from './user/message.vue';
import {AJAX_GET} from '../js/common.js';

export default {
    data(){
        return {
            tel: null,
            curIndex: 0,
            orderList: null,
            cardList: null,
            // 收货地址最多添加三个。后台数据中的收货地址数组必须要有三项，没有
            // 实际收货地址的就设为null。原因见 FIXME.md 表格第9项
            // addrList: null,
            defaultAddrIndex: null, // 默认地址的序号
            messageList: null,
        };
    },
    computed: {
        userData(){
            return this.$store.state.user;
        },
    },
    components: {
        'user-header': header,
        'user-menu': menu,
        'user-order': order,
        'user-card': card,
        'user-addr': addr,
        'user-message': message,
    },
    mounted(){
        if (this.$parent.userData){ // 已经自动登录
            let oUserData = this.$parent.userData;
            // this.orderList = oUserData.order;
            // this.cardList = oUserData.card;
            // this.addrList = oUserData.addr;
            this.defaultAddrIndex = oUserData.addr.findIndex((item)=>item.isDefault);
            // this.messageList = oUserData.message;
        }
        else {
            // let sURL = '../data/user.json',
            let sURL = 'http://www.fuyj.com.cn/ajax/user.php';
            let fnSuccessCallback = (res)=>{
                let oParsed = JSON.parse(res);
                this.$parent.userData = oParsed;
                // this.orderList = oParsed.order;
                // this.cardList = oParsed.card;
                // this.addrList = oParsed.addr;
                this.defaultAddrIndex = oParsed.addr.findIndex((item)=>item.isDefault);
                // this.messageList = oParsed.message;
                //
                // this.$parent.cartList = oParsed.cart.length;
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
