<template>
    <section id="indexButtomlList">
         <router-link to="/questions">常见问题</router-link>
         <router-link to="/contact">合作联系</router-link>
         <router-link to="/privacy">隐私权申明</router-link>
         <router-link to="/contact">联系方式</router-link>
    </section>
</template>
<style lang="scss" scoped>
#indexButtomlList{
    height: 180px;
    >a{
        display: block;
        height: 45px; line-height: 45px;
        box-sizing: border-box;
        border-bottom: 1px solid #e8e8e8;
        color: #1e1e1e;
        text-align: center;
        font-size: 14px;
        text-decoration: none;
    }
}
</style>
