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
        <i></i>
        <div>
            <span></span>
        </div>
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
    width: 100%; height: 340px;
    text-align: center;
    overflow: hidden;
    position: relative;
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
    >i{
        width: 22px; height: 22px;
        position: absolute;
        right: 14px; bottom: 9px;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
            position: -14px -143px;
            size: 761px 809px;
        }
    }
    >div{
        width: 118px; height: 1px;
        background-color:  #9b9b9b;
        position: absolute;
        right: 14px; bottom: 0px;
        span{
            display: block;
            width: 25px; height: 100%;
            float: right;
            background-color: #1e1e1e;
        }
    }
}

</style>
