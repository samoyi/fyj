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

import header from './header.vue';
import menu from './menu.vue';
import order from './order.vue';
import card from './card.vue';
import addr from './addr.vue';
import message from './message.vue';

export default {
    data(){
        return {
            tel: null,
            curIndex: 0,
            orderList: null,
            cardList: null,
            defaultAddrIndex: null, // 默认地址的序号
            messageList: null,
        };
    },
    computed: {
        userData(){
            return this.$store.state.userModule;
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
};

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
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
