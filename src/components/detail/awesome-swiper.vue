<!-- 详情页顶部产品图 -->
<template>
    <swiper :options="swiperOption" class="swiper-box">
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
}
</style>
