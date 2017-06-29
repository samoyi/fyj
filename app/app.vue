<template>
    <section id="content">
        <app-header></app-header>
        <cLoadingPage></cLoadingPage>
        <cIndexPage></cIndexPage>
    </section>
</template>

<script>
import header from "./components/header.vue";
import cLoadingPage from "./components/loading.vue";
import cIndexPage from "./components/index.vue";
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
  }
}
</script>

<style lang="scss">
    $headerHeight: 55px;
</style>
