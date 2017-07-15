<template>
    <section id="orderDetailPage">
        <order-info :order-info="orderInfo" :user-data="userData"></order-info>
    </section>
</template>

<script>
    import orderInfo from "./orderDetail/orderInfo.vue";

    import {AJAX_GET} from "../js/common.js";

    export default {
        props: ["orderInfo", "userData"],
        data: function () {
            return {
            };
        },
        components: {
          "order-info": orderInfo,
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
