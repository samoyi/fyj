<template>
    <swiper :style="{height:height+'px'}" :options="swiperOption" class="swiper-box" v-if="list">
        <swiper-slide class="swiper-item" v-for="(item, index) in list" :key="item.title">
            <h3 v-if="item.title">{{item.title}}</h3>
            <p class="des" v-if="item.des" v-html="item.des"></p>
            <img :src="item.url"  @click="toDetail(item.id)"/>
            <div class="price">
                <span v-if="item.price">¥</span>
                <span class="num" v-if="item.price">{{item.price}}</span>
                <span v-if="item.spec">/{{item.spec}}</span>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import {nWindowHeight, nHeaderHeight, toDetail} from "../../js/common.js";

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
    methods: {
        toDetail,
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
    img{
        width: 100%; height: 100%;
    }
    h3{
        position: absolute;
        top: 57px;
        font-size: 24px;
        text-align: center; width: 100%;
    }
    .des{
        position: absolute;
        top: 102px;
        font-size: 13px;
        text-align: center; width: 100%;
    }
    .price{
        width: 160px; height: 160px;
        line-height: 160px; text-align: center;
        position: absolute;
         top: 300px; right: 20px;
        color: white;
        background: {
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
            position: -342px -559px;
            size: 761px 809px;
        }
        font-size: 12px;
        .num{
            font-size: 24px;
        }
    }
}
// @for $i from 1 to 4{ // 相当于 $i<4
//     .swiper-item:nth-child(#{$i}){ // 变量作为字符使用时 #{}包裹
//         background-image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/index/new/#{$i - 1}.jpg");
//     }
// }
</style>
