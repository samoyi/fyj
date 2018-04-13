<template>
    <section class="hotProducts" v-show="list.length">
        <h2>热卖产品</h2>
        <swiper :options="swiperOption" class="swiper-box">
            <!-- 这里的key应该用id，但因为测试数据的蛋糕详情页只有两种，所以加随机数避免重复 -->
            <swiper-slide class="swiper-item" v-for="item in list" :key="item.id+Math.random()">
                <div>
                    <router-link :to="'/detail/'+item.id">
                        <img :src="item.url" :alt="item.name" />
                    </router-link>
                    <p class="name">{{item.name}}</p>
                    <p class="des" v-html="item.des.replace(/&nbsp;/g, '')"></p>
                    <p class="price">
                        <span>¥</span>
                        <span class="num">{{Number.parseFloat(item.price)}}</span>
                        <span>/{{item.spec}}</span>
                    </p>
                    <slot></slot>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
export default {
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
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
        };
    },
};

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.hotProducts{
    overflow: hidden;
    height: 390px;
    background:{
        image: url("http://localhost/gits/fyj/data/image/colorfulBg.jpg");
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
            img{
                width: 100%; height: 135px;
            }
            p{
                text-align: left;
                margin-left: 14px;
            }
            .name{
                font-size: 14px;
                line-height: 14px;
                color: #1e1e1e;
                margin-top: 14px;
                height: 14px;
                vertical-align: middle;
                width: 90%;
                margin-left: 5%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .des{
                font-size: 11px;
                line-height: 16px; height: 32px;
                color: #9b9b9b;
                margin-top: 6px;
                width: 90%;
                margin-left: 5%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
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
