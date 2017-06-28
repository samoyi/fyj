
// import Vue from "Vue";
import Vue from 'vue/dist/vue.js'

import "./common.scss";
// var Vue = require('vue');
// import indexCarousel from './components/index/carousel.vue';
var carousel = require("./components/index/carousel.vue");

new Vue({
    el: '#root',
    components: { carousel }
})

let a = 22333333;

console.log(a);
