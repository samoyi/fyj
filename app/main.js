;"use strict";


import Vue from 'vue/dist/vue.js'


import "./scss/common.scss";

var app = require('./app.vue');

new Vue({
    el: '#wrapper',
    components: { app }
});
