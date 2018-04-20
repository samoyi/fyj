<!-- <template>
<div id="app">
<router-view/>
</div>
</template> -->
<template>
    <section id="content">
        <cLoadingPage></cLoadingPage>
        <router-view  :addr-list="addrList" ></router-view>
        <!-- <router-view :cart-amount="cartAmount" :cart-list="cartList" :addr-list="addrList" :user-data="userData" :order-info="orderInfo"></router-view> -->
    </section>
</template>

<script>
import cLoadingPage from './components/loading.vue';
import {AJAX_GET} from './js/common.js';

export default {
    data(){
        return {
            siteTitle: '浮遇纪',
            // userData: null, // 如果自动登录，则一开始就取得用户数据，并全局可访问
            // cartList: [], // userData中的购物车数据，在好几个组件的头部购物车图标都要显示数量
            addrList: [],
            // detailID: null,
            // orderInfo: {},
        };
    },
    components: {
        cLoadingPage,
    },
    mounted(){
        {
            let sURL = 'http://www.fuyj.com.cn/ajax/login.php/101?phone=18009226074&password=18009226074';
            let fnSuccessCallback = (res)=>{};
            AJAX_GET(sURL, fnSuccessCallback);
        }
        //   document.cookie = "user_id=10006255;max-age=3600";
        //   if( "user_id" in getCookies() ){
        {
            // 加载用户数据
            // 包括购物车、订单、优惠券、地址、消息
            //   let sURL = "../data/user.json",
            // let sURL = 'http://www.fuyj.com.cn/ajax/user.php';
            // let fnSuccessCallback = (res)=>{
            //     let oParsed = JSON.parse(res);
            //     this.userData = oParsed;
            //     this.cartList = oParsed.cart;
            //     let aAddr = oParsed.addr;
            //     while (aAddr.length < 3){
            //         aAddr.push({});
            //     }
            //     this.addrList = aAddr;
            //     console.log(this.addrList);
            //     //   this.addrList = oParsed.addr;
            // };
            // AJAX_GET(sURL, fnSuccessCallback);
            let sURL = 'http://localhost/gits/fyj/data/ajax.php?act=user&tel=18009';
            this.$http.get(sURL).then(res=>{
                // let oParsed = res.body;
                this.$store.commit('loadUser', res.body);
                // this.userData = oParsed;
                // this.cartList = oParsed.cart;
                // let aAddr = oParsed.addr;
                // while (aAddr.length < 3){
                //     aAddr.push({});
                // }
                // this.addrList = aAddr;
            }, err=>{
                throw new Error(err);
            });
        }
        //   }
    },
    computed: {
        // 计算购物车中商品数量
        // cartAmount(){
        //     if (!this.cartList.length){
        //         return 0;
        //     }
        //     return this.cartList.reduce((sum, item)=>sum + item.amount, 0);
        // },
    },
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, hr, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video{margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
body {line-height: 1;}
ol, ul {list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none; }
table { border-collapse: collapse; border-spacing: 0; }
/*v2.0 over*/

body{
    background-color: #f6f6f6;
    #content>section:first-child{
        min-height: 200px;
        margin-top: 55px;
    }
}
</style>
