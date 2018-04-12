/*
 * 某款产品详情页的入口
 * 包含：图片、名称、描述、价格、购物车按钮
 *
 */
<template>
    <div v-if="curCardInfo">
        <img :src="curCardInfo[0]" :alt="curCardInfo[1]" />
        <p class="title">{{curCardInfo[1]}}</p>
        <p class="des" v-html="curCardInfo[2]"></p>
        <p class="price">
            <span>¥</span>
            <span class="num">{{curCardInfo[3]}}</span>
            <span>{{curCardInfo[4]}}</span>
        </p>
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

<style lang="scss" scoped>
div{
    text-align: center;
    overflow: hidden;
    >img{
        height: 163px;
    }
    >p{
        text-align: left;
        margin-left: 14px;
    }
    .title{
        font-size: 20px;
        line-height: 28px;
        color: #1e1e1e;
        margin-top: 18px;
    }
    .des{
        font-size: 11px;
        line-height: 16px;
        color: #9b9b9b;
        margin-top: 10px;
    }
    .price{
        font-size: 11px;
        color: #17919f;
        margin-top: 32px;
        .num{
            font-size: 18px;
        }
    }
}

</style>
