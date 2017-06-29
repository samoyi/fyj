/*
 * 某款产品详情页的入口
 * 包含：图片、名称、描述、价格、购物车按钮
 *
 */
<template>
    <div v-if="curCardInfo">
        <img :src="curCardInfo[0]" :alt="curCardInfo[1]" />
        <p v-text="curCardInfo[1]"></p>
        <p v-text="curCardInfo[2]"></p>
        <span v-text="curCardInfo[3]"></span>
        <slot></slot>
    </div>
</template>

<script>

    export default {
        props: ["curCardInfo"],
        data: function () {
            return {};
        },
    };

</script>

<style>
</style>
