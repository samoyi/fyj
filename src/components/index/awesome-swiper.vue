<template>
    <swiper :style="{height:height+'px'}" :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import {nWindowHeight, nHeaderHeight} from "../../js/common.js";

export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            },
            height: nWindowHeight-nHeaderHeight,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.swiper-box {
    width: 100%;
    margin: 0 auto;
}
.swiper-item {
    height: 100%;
    background:{
        size: cover;
        position: center;
        repeat: no-repeat;
    }
}
@for $i from 1 to 4{ // 相当于 $i<4
    .swiper-item:nth-child(#{$i}){ // 变量作为字符使用时 #{}包裹
        background-image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/index/new/#{$i - 1}.jpg");
    }
}
</style>
