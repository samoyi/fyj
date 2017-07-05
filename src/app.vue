<template>
    <section id="content">
        <cLoadingPage></cLoadingPage>
        <router-view></router-view>
    </section>
</template>

<script>

import cLoadingPage from "./components/loading.vue";



import {router} from "./router.js";

export default {
  data () {
    return {
      siteTitle: "浮遇纪",
    }
  },
  components: {
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
