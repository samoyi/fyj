<template>
    <swiper :style="{height:height+'px'}"  class="index-carousel" v-show="list.length"
        :options="swiperOption" ref="mySwiper">
        <!-- 这里的key应该用id，但因为测试数据的蛋糕详情页只有两种，所以加随机数避免重复 -->
        <swiper-slide class="swiper-item" v-for="item in list"
            :key="item.id+Math.random()">
            <h3 v-if="item.title">{{item.title}}</h3>
            <p class="des" v-if="item.des" v-html="item.des"></p>
            <router-link :to="'/detail/'+item.id">
                <img :src="item.url" />
            </router-link>
            <router-link :to="'/detail/'+item.id">
                <div class="price">
                    <span v-if="item.price">¥</span>
                    <span class="num" v-if="item.price">
                        {{Number.parseFloat(item.price)}}
                    </span>
                    <span v-if="item.spec">/{{item.spec}}</span>
                </div>
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import {nWindowHeight, nHeaderHeight} from '../../js/common.js';

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        list: {
            type: Array,
            required: true,
            default: ()=>[],
        },
    },
    data(){
        return {
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                },
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
    mounted(){
        this.swiper.slideTo(0, 1000, false);
    },
};
</script>

<style lang="scss">
@import "../../scss/common.scss";
.index-carousel {
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
                text-align: center;
                width: 90%; left: 5%;
            }
            .price{
                width: 160px; height: 160px;
                line-height: 160px; text-align: center;
                position: absolute;
                top: 300px; right: 20px;
                color: white;
                background: {
                    image: url("http://localhost/gits/fyj/data/image/icons/temp1.png");
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
