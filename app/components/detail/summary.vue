<template>
    <div class="productSummary" v-if="productSummary">
        <p class="title">{{productSummary[0]}}</p>
        <p class="price">
            <span>¥</span>
            <span class="num" v-if="productSummary[2]">{{productSummary[2][0]}}</span>
            <span v-if="productSummary[3]">元/{{(productSummary[3][0])}}</span>
        </p>
        <p class="des" v-html="productSummary[1]"></p>
    </div>
</template>

<script>
import {nWindowHeight, nHeaderHeight} from "../../js/common.js";

export default {
    props: ["productSummary"],
    data() {
        return {
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

}
</style>
