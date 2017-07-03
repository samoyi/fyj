<template>
    <section id="detailPage">
        <awesome-swiper></awesome-swiper>
        <product-summary :product-summary="productSummary"></product-summary>
        <product-yongxin :yongxin="yongxin"></product-yongxin>
        <product-spec :product-spec="productSpec"></product-spec>
        <product-notice></product-notice>
        <!--buttomPad防止最下边被加入购物车按钮挡住-->
        <div class="buttomPad" style="height:64px;"></div>
        <div v-show="bDispalyChooseBox" class="shade" @click="switchChooseBox"></div>
        <add-cart :display-box="bDispalyChooseBox" @switchChooseBox="switchChooseBox" :product-summary="productSummary"></add-cart>
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
                // bDispalyChooseBox 是否显示加入购物车的规格数量选择框。
                // 显示选择框的同时也显示半透明遮罩
                bDispalyChooseBox: false,
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
        methods: {
            switchChooseBox(){ // 隐藏半透明遮罩，同时隐藏购物车选择框
                this.bDispalyChooseBox = !this.bDispalyChooseBox;
            },
        }
    };

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#detailPage{
    width: 100%;
    position: absolute; top: $headerHeight;
    awesome-swiper{
        z-index: 0;
    }
    .shade{
        width: 100%; height: 100%;
        z-index: 1; // awesome-swiper 组件会自动设置 z-index 为 1。这里必须也要设1覆盖它
        position: absolute; top: 0;
        background-color: rgba(0, 0, 0, 0.8);
    }
}

</style>
