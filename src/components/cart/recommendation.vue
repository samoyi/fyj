<template>
    <section class="recommendation" v-if="list">
        <h2>推荐商品</h2>
        <div>
            <div class="product-card" v-for="item in list" :key="item.goods_name">
                <img :src="item.goods_thumb" :alt="item.goods_name" />
                <p class="name">{{item.goods_name}}</p>
                <p class="price">
                    <span>¥</span>
                    <span class="num">{{item.attr_price}}</span>
                </p>
                <i></i>
            </div>
            <div style="clear:both; height:64px;"></div>
        </div>
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

.recommendation{
    overflow: hidden;
    margin-top: 10px;
    position: relative;
    h2{
        font-size: $h2FontSize;
        text-align: center;
        height: 44px; line-height: 44px;
    }
    >div{
        width: 100%;
        .product-card {
            width: 47%; height: 263px;
            margin-left: 2%;
            float: left;
            background-color: white;
            position: relative;
            overflow: hidden;
            img{
                width: 100%; height: 173px;
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
}
</style>
