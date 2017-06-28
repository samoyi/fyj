<template>
    <section id="content">
        <h1>{{siteTitle}}</h1>
        <cLoadingPage></cLoadingPage>
        <cIndexPage></cIndexPage>
    </section>
</template>

<script>
import cLoadingPage from "./components/loading.vue";
import cIndexPage from "./components/index.vue";
export default {
  data () {
    return {
      siteTitle: "浮遇纪",
    }
  },
  components: {
    cLoadingPage,
    cIndexPage,
  }
}
</script>

<style>
</style>
