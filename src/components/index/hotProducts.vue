<template>
    <section class="hotProducts" v-if="list">
        <h2>热卖产品</h2>
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="item in list" :key="item.name">
                <div @click="toDetail(item.id)">
                    <img :src="item.url" :alt="item.name" />
                    <p class="name">{{item.name}}</p>
                    <p class="des" v-html="item.des"></p>
                    <p class="price">
                        <span>¥</span>
                        <span class="num">{{item.price}}</span>
                        <span>/{{item.spec}}</span>
                    </p>
                    <slot></slot>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>

import {toDetail} from "../../js/common.js";

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
    methods: {
        toDetail,
    },
}

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.hotProducts{
    overflow: hidden;
    height: 390px;
    background:{
        image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/colorfulBg.jpg");
        size: cover;
    }
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
        >div{
            text-align: center;
            overflow: hidden;
            background: white;
            height: 240px;
            >img{
                width: 133px; height: 133px;
            }
            >p{
                text-align: left;
                margin-left: 14px;
            }
            .name{
                font-size: 14px;
                line-height: 12px;
                color: #1e1e1e;
                margin-top: 14px;
            }
            .des{
                font-size: 11px;
                line-height: 16px; height: 16px;
                color: #9b9b9b;
                margin-top: 6px;
                overflow: hidden;
            }
            .price{
                font-size: 11px;
                color: #17919f;
                margin-top: 16px;
            }
        }
    }
}
</style>
