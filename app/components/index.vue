<template>
    <section>
        <h1>首页</h1>
        <carousel></carousel>
    </section>
</template>

<script>
    import carousel from "./index/carousel.vue";

    export default {
        data: function () {
            return {
                msg: ""
            }
        },
        components: {
          carousel,
        }
    };

    import {AJAX_GET} from "../js/common.js";
    window.addEventListener("load", function(){
        let sURL = "../data/indexCarousel.json",
            fnSuccessCallback = function(res){
                // console.log(carousel.list = JSON.parse(res));
                // console.log(carousel.data);
            };
        AJAX_GET(sURL, fnSuccessCallback);
    });

</script>

<style>

</style>
