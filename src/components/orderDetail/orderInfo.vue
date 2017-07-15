<template>
    <section class="orderInfo" :list="orderInfo" :user-data="userData">
        <div>
            <span>购物清单</span>
            <span>共计 {{amount}} 件产品</span>
        </div>
        <ul>

        </ul>
        <div>
            <span>{{oDefaultAddr.consignee}}</span>
            <span>{{oDefaultAddr.tel}}</span>
            <span>{{oDefaultAddr.addr}}</span>
            <span>&gt;</span>
        </div>
        <div>
            <span>送货时间</span>
            <span>&gt;</span>
            <date-picker></date-picker>
        </div>
    </section>
</template>

<script>

    import datepicker from "./datepicker.vue";

    export default {
        props: ["orderInfo", "userData"],
        data: function () {
            return {
                amount: this.orderInfo.list.length,
            };
        },
        computed: {
            oDefaultAddr(){
                return this.userData.addr.find((item)=>item.isDefault);
            },
        },
        components: {
            "date-picker": datepicker,
        }
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.orderInfo{

}
</style>
