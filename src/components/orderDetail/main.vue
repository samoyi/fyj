<template>
    <section id="orderDetailPage">
        <header>
            <span @click="back">返回</span>
            <h2>订单详情</h2>
        </header>
        <order-info :order-info="orderInfo" :user-data="userData"></order-info>
        <order-cost :sum="orderInfo.sum" :freight="freight"></order-cost>
        <pay-now :sum="orderInfo.sum" :freight="freight"></pay-now>
    </section>
</template>

<script>
import orderInfo from './orderInfo.vue';
import cost from './cost.vue';
import payNow from './payNow.vue';

export default {
    props: ['orderInfo', 'userData'],
    data(){
        return {
            freight: 15,
            deliveryInfo: {},
        };
    },
    components: {
        'order-info': orderInfo,
        'pay-now': payNow,
        'order-cost': cost,
    },
    methods: {
        back(){
            history.back();
        },
    },
};

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
#orderDetailPage{
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
}

</style>
