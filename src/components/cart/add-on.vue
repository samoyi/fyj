<template>
    <section class="add-on" v-if="list">
        <h2>加价购</h2>
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="item in list" :key="item[1]">
                <img :src="item[0]" :alt="item[1]" />
                <p class="name">{{item[1]}}</p>
                <p class="price">
                    <span>¥</span>
                    <span class="num">{{item[2]}}</span>
                </p>
                <i></i>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>

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
}

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.add-on{
    overflow: hidden;
    height: 232px;

    position: relative;
    h2{
        font-size: $h2FontSize;
        text-align: center;
        height: 44px; line-height: 44px;
    }
    .swiper-box {
        width: 100%; height: 188px;
        position: absolute; bottom: 0;
        margin-left: 2%;
    }
    .swiper-item {
        width: 133px; height: 100%;
        background-color: white;
        overflow: hidden;
        img{
            width: 100%; height: 133px;
        }
        .name{
            font-size: 12px;
            color: #1e1e1e;
            margin: 10px auto auto 14px;
        }
        .price{
            font-size: 11px;
            color: #17919f;
            margin: 10px auto auto 14px;
        }
        i{
            width: 22px; height: 22px;
            position: absolute;
            right: 14px; bottom: 10px;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                position: -14px -143px;
                size: 761px 809px;
            }
        }
    }
}
</style>
