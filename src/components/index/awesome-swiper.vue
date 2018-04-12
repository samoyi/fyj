<template>
    <swiper :style="{height:height+'px'}"  class="swiper-box" v-show="list"
        :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-item" v-for="(item, index) in list" :key="index">
            <h3 v-if="item.title">{{item.title}}</h3>
            <p class="des" v-if="item.des" v-html="item.des"></p>
            <img :src="item.url" @click="toDetail(item.id)" />
            <div class="price" @click="toDetail(item.id)">
                <span v-if="item.price">¥</span>
                <span class="num" v-if="item.price">{{Number.parseFloat(item.price)}}</span>
                <span v-if="item.spec">/{{item.spec}}</span>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import {nWindowHeight, nHeaderHeight, toDetail} from '../../js/common.js';

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        'list': {
            type: Array,
            default: function(){
                return [];
            },
        },
    },
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
            },
            height: nWindowHeight - nHeaderHeight,
            ids: [],
        };
    },
    computed: {
        swiper(){
            return this.$refs.mySwiper.swiper;
        },
    },
    methods: {
        toDetail,
    },
    mounted(){
        this.swiper.slideTo(0, 1000, false);
    },
};
</script>

<style lang="scss">
@import "../../scss/common.scss";
.swiper-box {
    width: 100%;
    margin: 0 auto;
    .swiper-wrapper{
        height: 100%;
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
                    image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/temp/temp1.png");
                    size: cover;
                }
                font-size: 12px;
                .num{
                    font-size: 24px;
                }
            }
        }
    }
}
// @for $i from 1 to 4{ // 相当于 $i<4
//     .swiper-item:nth-child(#{$i}){ // 变量作为字符使用时 #{}包裹
//         background-image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/index/new/#{$i - 1}.jpg");
//     }
// }
</style>
