<template>
    <section id="content">
        <router-view></router-view>
        <app-header></app-header>
        <cLoadingPage></cLoadingPage>
        <cIndexPage></cIndexPage>
    </section>
</template>

<script>
import header from "./components/header.vue";
import cLoadingPage from "./components/loading.vue";
import cIndexPage from "./components/index.vue";



import {router} from "./router.js";

export default {
  data () {
    return {
      siteTitle: "浮遇纪",
    }
  },
  components: {
      "app-header": header,
      cLoadingPage,
      cIndexPage,
    //   "app-router": router,
  },
  router,
}
</script>

<style lang="scss">
    body{
        background-color: #f6f6f6;
    }
</style>
