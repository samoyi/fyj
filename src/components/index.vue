<template>
    <section id="indexPage">
        <app-header :index="0" :cart-amount="cartAmount"></app-header>
        <awesome-swiper :list="carouselList"></awesome-swiper>
        <new-products :list="newProducts"></new-products>
        <hot-products :list="hotProducts"></hot-products>
        <buttom-list></buttom-list>
        <buttom-copyright></buttom-copyright>
        <a class="tel" href="tel:4006633677" />
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
        props: ["cartAmount"],
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
                let sURL = "http://www.fuyj.com.cn/ajax/home.php",
                // let sURL = "../data/index.json",
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
    .tel{
        position: fixed; left: 0; top: 210px;
        background-color: black; width: 22px; height: 22px;
        z-index: 1;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
            size: 761px 809px;
            position: -88px -127px;
        }
    }
}

</style>
