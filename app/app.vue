<template>
    <section id="content">
        <router-view></router-view>
        <app-header></app-header>
        <cLoadingPage></cLoadingPage>
    </section>
</template>

<script>
import header from "./components/header.vue";
import cLoadingPage from "./components/loading.vue";
// import cIndexPage from "./components/index.vue";



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
  },
  router,
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
