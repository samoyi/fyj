"use strict";


import Vue from 'vue/dist/vue.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);



import "./scss/common.scss";

var app = require('./app.vue');

new Vue({
    el: '#wrapper',
    components: { app }
});
