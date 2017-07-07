<template>
    <section id="detailPage">
        <awesome-swiper :product-summary="productSummary"></awesome-swiper>
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
                id: null,
                productInfo: null,
                productSummary: null,
                yongxin: null,
                productSpec: null,
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

            {
                let sURL = "http://www.fuyj.com.cn/ajax/goods_detail.php?id",
                // let sURL = "../data/productInfo.json",
                    fnSuccessCallback = (res)=>{
                        let oParsed = JSON.parse(res);
                        this.productSummary = {
                            "image": oParsed.image,
                            "name": oParsed.name.trim(),
                            "des": oParsed.des.trim(),
                            "price": oParsed.price,
                            "spec": ["1.0磅", "2.0磅"],
                            "icon": oParsed.icon,
                            "tag": oParsed.field1[0].join(" / "),
                        };
                        this.yongxin = oParsed.field1[1];
                        this.productSpec = {
                            "des": oParsed.field2[0],
                            "icon": "刀叉",
                            "list": oParsed.field2.slice(1),
                        };
                        this.id = oParsed.id;
                    };
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
