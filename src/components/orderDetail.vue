<template>
    <section id="orderDetailPage">
        <order-info :order-info="orderInfo" :user-data="userData"></order-info>
        <pay-now :sum="orderInfo.sum" :freight="freight"></pay-now>
    </section>
</template>

<script>
    import orderInfo from "./orderDetail/orderInfo.vue";
    import payNow from "./orderDetail/payNow.vue";

    import {AJAX_GET} from "../js/common.js";

    export default {
        props: ["orderInfo", "userData"],
        data: function () {
            return {
                freight: 15,
                deliveryInfo: {},
            };
        },
        components: {
          "order-info": orderInfo,
          "pay-now": payNow,
        },
        methods: {

        }
    };

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#orderDetailPage{
    // $headerHeight;
}

</style>
