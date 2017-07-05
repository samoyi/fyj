<template>
    <swiper :style="{height:height+'px'}" :options="swiperOption" class="swiper-box" v-if="list">
        <swiper-slide class="swiper-item" v-for="(item, index) in list" :key="item.title">
            <h3 v-if="item.title">{{item.title}}</h3>
            <p v-if="item.des" v-html="item.des"></p>
            <img :src="item.url" />
            <span v-if="item.price">¥</span>
            <span v-if="item.price">{{item.price}}</span>
            <span v-if="item.spec">/{{item.spec}}</span>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import {nWindowHeight, nHeaderHeight} from "../../js/common.js";

export default {
    props: ["list"],
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            },
            height: nWindowHeight-nHeaderHeight,
            ids: [],
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
    // background:{
    //     size: cover;
    //     position: center;
    //     repeat: no-repeat;
    // }
    img{
        width: 100%; height: 100%;
    }
}
// @for $i from 1 to 4{ // 相当于 $i<4
//     .swiper-item:nth-child(#{$i}){ // 变量作为字符使用时 #{}包裹
//         background-image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/index/new/#{$i - 1}.jpg");
//     }
// }
</style>
