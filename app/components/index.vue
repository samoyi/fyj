<template>
    <section id="indexPage">
        <awesome-swiper></awesome-swiper>
        <section class="threeCard">
            <product-card :cur-card-info="cardInfos[0]"><i>加入购物车</i></product-card>
            <product-card :cur-card-info="cardInfos[1]"><i>加入购物车</i></product-card>
            <product-card :cur-card-info="cardInfos[2]"><i>加入购物车</i></product-card>
        </section>
        <horizontal-list :list="horizontalList"></horizontal-list>
    </section>
</template>

<script>
    import productCard from "./common/productCard.vue";
    import horizontalList from "./index/horizontalList.vue";
    import awesomeSwiper from "./index/awesome-swiper.vue";

    import {AJAX_GET} from "../js/common.js";

    export default {
        data: function () {
            return {
                cardInfos: [],
                horizontalList: [
                    [
                        "http://www.fuyj.com.cn/images/201706/thumb_img/60_thumb_G_1496868398868.jpg",
                        "产品卡片名1",
                        "产品卡片描述",
                        "产品价格"
                    ],
                    [
                        "http://www.fuyj.com.cn/images/201706/thumb_img/60_thumb_G_1496868398868.jpg",
                        "产品卡片名2",
                        "产品卡片描述",
                        "产品价格"
                    ],
                    [
                        "http://www.fuyj.com.cn/images/201706/thumb_img/60_thumb_G_1496868398868.jpg",
                        "产品卡片名3",
                        "产品卡片描述",
                        "产品价格"
                    ]
                ],
            }
        },
        components: {
          "product-card": productCard,
          "horizontal-list": horizontalList,
          "awesome-swiper": awesomeSwiper,
        },
        mounted: function(){
            // 加载 carousel 组件中的数据
            {
                let sURL = "../data/indexCarousel.json",
                fnSuccessCallback = (res)=>{this.carouselList = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }

            // 加载 首页产品卡片的数据
            {
                let sURL = "../data/indexCardList.json",
                fnSuccessCallback = (res)=>{this.cardInfos = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }
        },
    };




</script>

<style lang="scss" scoped>
#indexPage{
    position: absolute; top: $headerHeight;
    .threeCard{
        height: 2300px; overflow: hidden;
        >div{
            height: 690px;
        }
    }
}

</style>
