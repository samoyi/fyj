<template>
    <section id="detailPage">
        <awesome-swiper></awesome-swiper>
        <product-summary :product-summary="productSummary"></product-summary>
        <product-yongxin :yongxin="yongxin"></product-yongxin>
        <product-spec :product-spec="productSpec"></product-spec>
        <product-notice></product-notice>
    </section>
</template>

<script>
    import awesomeSwiper from "./detail/awesome-swiper.vue";
    import summary from "./detail/summary.vue";
    import yongxin from "./detail/yongxin.vue";
    import spec from "./detail/spec.vue";
    import notice from "./detail/notice.vue";

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
        },
        mounted: function(){
            // 加载 产品概述的数据
            {
                let sURL = "../data/productSummary.json",
                fnSuccessCallback = (res)=>{this.productSummary = JSON.parse(res);};
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
