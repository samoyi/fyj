<template>
    <section class="add-on" v-show="list.length">
        <h2>加价购</h2>
        <swiper class="swiper-box" :options="swiperOption" ref="mySwiper">
            <!-- 这里的key应该用id，但因为测试数据的蛋糕详情页只有两种，所以加随机数避免重复 -->
            <swiper-slide class="swiper-item" v-for="item in list"
                :key="item.id+Math.random()">
                <router-link :to="'/detail/'+item.id">
                    <img :src="item.add_img" :alt="item.add_name" />
                </router-link>
                <p class="name">{{item.add_name}}</p>
                <p class="price">
                    <span>¥</span>
                    <span class="num">{{item.add_price}}</span>
                </p>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: ['list'],
    data(){
        return {
            swiperOption: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
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
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                position: -14px -143px;
                size: 761px 809px;
            }
        }
    }
}
</style>
