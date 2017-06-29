<template>
    <ul class="horizontalList" v-if="list">
        <product-card v-for="item in list" :key="item[1]" :cur-card-info="item"></product-card>
    </ul>
</template>

<script>
    import productCard from "../common/productCard.vue";

    export default {
        props: ["list"],
        data: function () {
            return {};
        },
        components: {
            "product-card": productCard,
        },
    };

</script>

<style lang="scss" scoped>
.horizontalList{
    overflow: hidden;
}
</style>
