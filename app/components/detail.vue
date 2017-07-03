<template>
    <section id="detailPage">
        <awesome-swiper></awesome-swiper>
        <product-summary :product-summary="productSummary"></product-summary>
        <product-yongxin :yongxin="yongxin"></product-yongxin>
        <product-spec :product-spec="productSpec"></product-spec>
        <product-notice></product-notice>
        <add-cart :product-summary="productSummary"></add-cart>
        <!--buttomPad防止最下边被加入购物车按钮挡住-->
        <div class="buttomPad" style="height:64px;"></div>
    </section>
</template>

<script>
    import awesomeSwiper from "./detail/awesome-swiper.vue";
    import summary from "./detail/summary.vue";
    import yongxin from "./detail/yongxin.vue";
    import spec from "./detail/spec.vue";
    import notice from "./detail/notice.vue";
    import addToCart from "./detail/addToCart.vue";

    import {AJAX_GET} from "../js/common.js";

    export default {
        data: function () {
            return {
                productSummary: [],
                yongxin: "",
                productSpec: [],
            }
        },
        components: {
          "awesome-swiper": awesomeSwiper,
          "product-summary": summary,
          "product-yongxin": yongxin,
          "product-spec": spec,
          "product-notice": notice,
          "add-cart": addToCart,
        },
        mounted: function(){
            // 加载 产品概述的数据
            {
                let sURL = "../data/productSummary.json",
                fnSuccessCallback = (res)=>{this.productSummary = JSON.parse(res);
                    console.log((this.productSummary)[2][0]);
                    console.log((this.productSummary)[3][0]);
                };
                AJAX_GET(sURL, fnSuccessCallback);
            }

            // 加载 产品用心的数据
            {
                let sURL = "../data/productYongxin.json",
                fnSuccessCallback = (res)=>{this.yongxin = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }

            // 加载 产品规格的数据
            {
                let sURL = "../data/productSpec.json",
                fnSuccessCallback = (res)=>{this.productSpec = JSON.parse(res);};
                AJAX_GET(sURL, fnSuccessCallback);
            }
        },
    };


</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#detailPage{
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
