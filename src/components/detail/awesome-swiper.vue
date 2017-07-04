<template>
    <swiper :options="swiperOption" class="swiper-box" v-if="productSummary">
        <swiper-slide class="swiper-item" v-for="(item,index) in productSummary.image" :style="{backgroundImage:'url('+item+')'}" :key="index"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import {nWindowHeight, nHeaderHeight} from "../../js/common.js";

export default {
    props: ["productSummary"],
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                centeredSlides: true,
                autoplayDisableOnInteraction: false
            },
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.swiper-box {
    width: 100%; height: 375px;
    margin: 0 auto;
    .swiper-item {
        height: 100%;
        background:{
            size: cover;
            position: center;
            repeat: no-repeat;
        }
    }
    // @for $i from 1 to 4{ // 相当于 $i<4
    //     .swiper-item:nth-child(#{$i}){ // 变量作为字符使用时 #{}包裹
    //         background-image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/index/new/#{$i - 1}.jpg");
    //     }
    // }
}
</style>
