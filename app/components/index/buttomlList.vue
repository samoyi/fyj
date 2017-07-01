<template>
    <section class="buttomlList">
       <div class="nav">
         <router-link to="/questions">常见问题</router-link>
         <router-link to="/cooperation">合作联系</router-link>
         <router-link to="/privacy">隐私权申明</router-link>
         <router-link to="/contact">联系</router-link>
       </div>
       <div class="content">
          <router-view></router-view>
       </div>

    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.buttomlList
{
    .content{
        >section{
            z-index: 8;
            position: fixed; top:$headerHeight; left: 0;
            width: 100%; height: 100%;
            background: red;
        }
    }
}
</style>
