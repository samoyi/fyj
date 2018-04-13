<!-- 详情页顶部产品图 -->
<template>
    <swiper :options="swiperOption" class="swiper-box">
    <!-- <swiper :options="swiperOption" class="swiper-box" v-if="productSummary"> -->
        <!-- <swiper-slide class="swiper-item" v-for="item in productSummary.image" :style="{backgroundImage:'url('+item+')'}" :key="item"></swiper-slide> -->
        <swiper-slide class="swiper-item" v-for="item in images"
                :style="{backgroundImage:'url('+item+')'}"
                :key="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>

export default {
    props: {
        images: {
            type: Array,
            required: true,
            default: ()=>[],
        },
    },
    // props: ['productSummary'],
    data(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
            },
        };
    },
};
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
