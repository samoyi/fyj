<template>
    <section id="indexPage">
        <app-header></app-header>
        <awesome-swiper :list="carouselList"></awesome-swiper>
        <new-products :list="newProducts"></new-products>
        <hot-products :list="hotProducts"></hot-products>
        <buttom-list></buttom-list>
        <buttom-copyright></buttom-copyright>
    </section>
</template>

<script>
    import header from "./common/header.vue";
    import awesomeSwiper from "./index/awesome-swiper.vue";
    import newProducts from "./index/newProducts.vue";
    import hotProducts from "./index/hotProducts.vue";
    import buttomlList from "./index/buttomlList.vue";
    import copyright from "./index/copyright.vue";

    import {AJAX_GET} from "../js/common.js";

    export default {
        data: function () {
            return {
                carouselList: null,
                newProducts: null,
                hotProducts: null,
            }
        },
        components: {
          "app-header": header,
          "awesome-swiper": awesomeSwiper,
          "new-products": newProducts,
          "hot-products": hotProducts,
          "buttom-list": buttomlList,
          "buttom-copyright": copyright,
        },
        mounted: function(){
            // 加载 数据
            {
                let sURL = "../data/index.json",
                fnSuccessCallback = (res)=>{
                    let parsed = JSON.parse(res);
                    this.carouselList = parsed.carousel;
                    this.newProducts = parsed.new;
                    this.hotProducts = parsed.hot;
                };
                AJAX_GET(sURL, fnSuccessCallback);
            }
        },
    };



</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#indexPage{
    width: 100%;
    position: absolute; top: $headerHeight;
    .threeCard{
        height: 2300px; overflow: hidden;
        >div{
            height: 690px;
        }
    }
}

</style>
