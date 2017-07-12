<template>
    <section id="content">
        <cLoadingPage></cLoadingPage>
        <keep-alive>
            <router-view :cart-amount="cartAmount" :cart-list="cartList"></router-view>
        </keep-alive>
    </section>
</template>

<script>

import cLoadingPage from "./components/loading.vue";

import {AJAX_GET, getCookies} from "./js/common.js";


import {router} from "./router.js";

export default {
  data () {
    return {
      siteTitle: "浮遇纪",
      userData: null, // 如果自动登录，则一开始就取得用户数据，并全局可访问
      cartList: [], // userData中的购物车数据，在好几个组件的头部购物车图标都要显示数量
    }
  },
  components: {
      cLoadingPage,
  },
  router,
  mounted: function(){
      if( "openid" in getCookies() ){
          alert("可以自动登录");
          {
              // 加载用户数据
              // 包括购物车、订单、优惠券、地址、消息
              let sURL = "../data/user.json",
                  fnSuccessCallback = (res)=>{
                      let oParsed = JSON.parse(res);
                      this.userData = oParsed;
                      this.cartList = oParsed.cart;
                  };
              AJAX_GET(sURL, fnSuccessCallback);
          }

      }
      document.cookie = "openid=myopenid;max-age=3600";
  },
  computed: {
      // 计算购物车中商品数量
      cartAmount(){
          if( !this.cartList ){
              return 0;
          }
          return this.cartList.reduce((sum,item)=>sum+item.amount, 0);
      },
  }
}






</script>

<style lang="scss">
    body{
        background-color: #f6f6f6;
        #content>section:first-child{
            min-height: 200px;
            margin-top: 55px;
        }
    }
</style>
