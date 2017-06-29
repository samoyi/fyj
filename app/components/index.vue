<template>
    <section>
        <h1>首页</h1>
        <carousel ref="carousel_ref"></carousel>
    </section>
</template>

<script>
    import carousel from "./index/carousel.vue";
    import {AJAX_GET} from "../js/common.js";

    export default {
        data: function () {
            return {
                msg: ""
            }
        },
        components: {
          carousel,
        },
        mounted: function(){
            // 加载 carousel 组件中的数据
            let sURL = "../data/indexCarousel.json",
                fnSuccessCallback = (res)=>{this.$refs.carousel_ref.list = JSON.parse(res)};
            AJAX_GET(sURL, fnSuccessCallback);
        },
    };




</script>

<style>

</style>
