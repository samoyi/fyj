<template>
    <section id="detailPage">
        <app-header :cart-amount="cartAmount"></app-header>
        <awesome-swiper :images="images"></awesome-swiper>
        <product-summary :summary="productSummary"></product-summary>
        <product-yongxin :yongxin="yongxin"></product-yongxin>
        <product-spec :spec-info="specInfo"></product-spec>
        <product-notice></product-notice>
        <!-- buttomPad防止最下边被加入购物车按钮挡住 -->
        <div class="buttomPad" style="height:64px;"></div>
        <div v-show="bDispalyChooseBox" class="shade"
                @click="switchChooseBox">
        </div>
        <add-cart :display-box="bDispalyChooseBox"
                @switchChooseBox="switchChooseBox"
                :product-summary="productSummary">
        </add-cart>
        <add-tip :displayTip="displayTip"></add-tip>
    </section>
</template>

<script>
import header from '../common/header.vue';
import awesomeSwiper from './awesome-swiper.vue';
import summary from './summary.vue';
import yongxin from './yongxin.vue';
import spec from './spec.vue';
import notice from './notice.vue';
import addToCart from './addToCart.vue';
import addTip from './addTip.vue';

// import {AJAX_GET} from '../js/common.js';

export default {
    props: ['cartAmount'],
    data(){
        return {
            id: null,
            // productInfo: null,
            productSummary: null,
            images: [],
            yongxin: null,
            specInfo: null,
            // bDispalyChooseBox 是否显示加入购物车的规格数量选择框。
            // 显示选择框的同时也显示半透明遮罩
            bDispalyChooseBox: false,
            displayTip: false,
        };
    },
    components: {
        'app-header': header,
        'awesome-swiper': awesomeSwiper,
        'product-summary': summary,
        'product-yongxin': yongxin,
        'product-spec': spec,
        'product-notice': notice,
        'add-cart': addToCart,
        'add-tip': addTip,
    },
    mounted(){
        // let tepIndex = location.hash.indexOf('id');
        // let productID = tepIndex === -1 ? this.$parent.detailID : location.hash.slice(tepIndex + 3);
        let productID = this.$route.params.id;

        // let sURL = 'http://www.fuyj.com.cn/ajax/goods_detail.php?id=' + productID;
        let sURL = 'http://localhost/gits/fyj/data/ajax.php?act=detail&id=' + productID;
        this.$http.get(sURL).then(res=>{
            let oParsed = res.body;
            this.productSummary = {
                'images': oParsed.images,
                'name': oParsed.name.trim(),
                'des': oParsed.des.trim(),
                'price': oParsed.price,
                'spec': oParsed.specForChoose,
                'icon': oParsed.icon,
                'tags': oParsed.tags.join(' / '),
            };
            this.images = oParsed.images;
            this.yongxin = oParsed.yongxin;
            this.specInfo = {
                'des': oParsed.specInfo.des,
                'icon': '刀叉',
                'list': oParsed.specInfo.list,
            };
            this.id = oParsed.id;
        }, err=>{
            throw new Error(err);
        });

        // let fnSuccessCallback = (res)=>{
        //     let oParsed = JSON.parse(res);
        //     this.productSummary = {
        //         'image': oParsed.image,
        //         'name': oParsed.name.trim(),
        //         'des': oParsed.des.trim(),
        //         'price': oParsed.price,
        //         'spec': ['1.0磅', '2.0磅'],
        //         'icon': oParsed.icon,
        //         'tag': oParsed.field1[0].join(' / '),
        //     };
        //     console.log(this.productSummary);
        //     this.yongxin = oParsed.field1[1];
        //     this.productSpec = {
        //         'des': oParsed.field2[0],
        //         'icon': '刀叉',
        //         'list': oParsed.field2.slice(1),
        //     };
        //     this.id = oParsed.id;
        // };
        // AJAX_GET(sURL, fnSuccessCallback);
    },
    methods: {
        switchChooseBox(){ // 隐藏半透明遮罩，同时隐藏购物车选择框
            this.bDispalyChooseBox = !this.bDispalyChooseBox;
        },
    },
};

</script>

<style lang='scss' scoped>
@import "../../scss/common.scss";
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
