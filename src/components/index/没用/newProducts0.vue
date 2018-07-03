<template>
    <section id="indexNewProducts" v-if="list">
        <h2>新品推荐</h2>
        <product-card v-for="item in list" :key="item[1]" :cur-card-info="item"></product-card>
    </section>
</template>

<script>
    import productCard from "../common/productCard_big.vue";

    export default {
        props: ["list"],
        components: {
            "product-card": productCard,
        },
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#indexNewProducts{
    overflow: hidden;
    width: 96%; height: 1155px;
    position: relative; left: 2%;
    h2{
        font-size: $h2FontSize;
        height: 95px; line-height: 95px;
        text-align: center;
    }
    >div{
        margin-bottom: 20px;
    }
    >div:last-child{
        margin-bottom: 0;
    }
}
</style>
