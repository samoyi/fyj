<template>
    <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-box {
    width: 100%; height: 375px;
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
        background-image: url("http://www.fuyj.com.cn/images/201706/thumb_img/60_thumb_G_1496868398868.jpg");
    }
}
</style>
