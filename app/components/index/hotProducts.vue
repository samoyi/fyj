<template>
    <section class="hotProducts">
        <h2>热卖产品</h2>
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="item in list" :key="item[1]">
                <product-card :cur-card-info="item"></product-card>
            </swiper-slide>
            <!-- <swiper-slide class="swiper-item">
                <product-card></product-card>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <product-card></product-card>
            </swiper-slide> -->
        </swiper>
    </section>
</template>

<script>
import productCard from "../common/productCard_middle.vue";
export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 2.5,
                spaceBetween: 10
            }
        }
    },
    props: ["list"],
    components: {
        "product-card": productCard,
    },
}

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.hotProducts{
    overflow: hidden;
    height: 390px;
    background-color: #d7ecf1;
    position: relative;
    h2{
        font-size: $h2FontSize;
        text-align: center;
        margin-top: 44px;
    }
    .swiper-box {
        width: 100%; height: 235px;
        margin: 35px 0 0 2%;
    }
    .swiper-item {
        height: 100%;
    }
}
</style>
