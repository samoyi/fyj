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
import header from '../common/header.vue';
import awesomeSwiper from './awesome-swiper.vue';
import newProducts from './newProducts.vue';
import hotProducts from './hotProducts.vue';
import buttomlList from './buttomlList.vue';
import copyright from './copyright.vue';

export default {
    props: ['cartAmount'],
    data(){
        return {
            carouselList: [],
            newProducts: [],
            hotProducts: [],
        };
    },
    components: {
        'app-header': header,
        'awesome-swiper': awesomeSwiper,
        'new-products': newProducts,
        'hot-products': hotProducts,
        'buttom-list': buttomlList,
        'buttom-copyright': copyright,
    },
    mounted: function(){
        let sURL = 'http://localhost/gits/fyj/data/ajax.php?act=home';
        this.$http.get(sURL).then(res=>{
            let parsed = res.body;
            this.carouselList = parsed.carousel;
            this.newProducts = parsed.new;
            this.hotProducts = parsed.hot;
        }, err=>{
            throw new Error(err);
        });
    },
};

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
#indexPage{
    width: 100%;
    position: absolute; top: $headerHeight;
    .tel{
        position: fixed; left: 0; top: 210px;
        background-color: black; width: 22px; height: 22px;
        z-index: 1;
        background:{
            image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
            size: 761px 809px;
            position: -88px -127px;
        }
    }
}

</style>
