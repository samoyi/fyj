<template>
    <section class="hotProducts" v-if="list">
        <h2>热卖产品</h2>
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="item in list" :key="item.name">
                <!-- <product-card :cur-card-info="item"></product-card> -->
                <div>
                    <img :src="item.url" :alt="item.name" />
                    <p class="name">{{item.name}}</p>
                    <p class="des" v-html="item.des"></p>
                    <p class="price">
                        <span>¥</span>
                        <span class="num">{{item.price}}</span>
                        <span>{{item.des}}</span>
                    </p>
                    <slot></slot>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
// import productCard from "../common/productCard_middle.vue";
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
    // components: {
    //     "product-card": productCard,
    // },
}

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.hotProducts{
    overflow: hidden;
    height: 390px;
    background-color: #d7ecf1;
    position: relative;
    margin-top: 22px;
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
            >img{
                height: 163px;
            }
            >p{
                text-align: left;
                margin-left: 14px;
            }
            .name{
                font-size: 20px;
                line-height: 28px;
                color: #1e1e1e;
                margin-top: 18px;
            }
            .des{
                font-size: 11px;
                line-height: 16px;
                color: #9b9b9b;
                margin-top: 10px;
            }
            .price{
                font-size: 11px;
                color: #17919f;
                margin-top: 32px;
                .num{
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
