<template>
    <div class="productSummary" v-if="productSummary">
        <p class="title">{{productSummary.name}}</p>
        <p class="price">
            <span>¥</span>
            <span class="num" v-if="productSummary.price">{{(productSummary.price)[0]}}</span>
            <span v-if="productSummary.spec">元/{{((productSummary.spec)[0])}}</span>
        </p>
        <p class="des" v-html="productSummary.des"></p>
        <i class="icon" :style="{backgroundPosition:oSpriteMap[productSummary.icon]}"></i>
        <p class="tags">{{productSummary.tag}}</p>
    </div>
</template>

<script>
import {nWindowHeight, nHeaderHeight} from "../../js/common.js";
import {oSpriteMap} from "../../js/sprite_map.js";

export default {
    props: ["productSummary"],
    data() {
        return {
            oSpriteMap,
        }
    },
}
</script>

<style lang="scss" scoped>

.productSummary{
    width: 100%; height: 208px;
    background: white;
    overflow: hidden;
    position: relative;
    >p{
        margin-left: 14px;
    }
    .title{
        font-size: 20px;
        line-height: 28px;
        color: #1e1e1e;
        margin-top: 18px;
    }
    .price{
        font-size: 11px;
        color: #17919f;
        margin-top: 10px;
        .num{
            font-size: 18px;
        }
    }
    .des{
        font-size: 11px;
        line-height: 16px;
        color: #9b9b9b;
        margin-top: 20px;
    }
    .icon{
        width: 22px; height: 22px;
        position: absolute;
        left: 5px; top: 50px;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
            size: 761px 809px;
        }
    }
}
</style>
