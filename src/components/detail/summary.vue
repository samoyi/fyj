<!-- 头图之下、用心之上的产品概述部分 -->
<template>
    <div class="summary" v-if="summary">
        <p class="title">{{summary.name}}</p>
        <p class="price">
            <span>¥</span>
            <span class="num" v-if="summary.price">{{(summary.price)[0]}}</span>
            <!-- 因为产品计量单位不一定是“磅”，所以计量单位也要作为数据传入 -->
            <span v-if="summary.spec">元/{{((summary.spec)[0])}}</span>
        </p>
        <p class="des" v-html="summary.des.replace(/&nbsp;/g, '')"></p>
        <!-- 图标规则见 src\js\sprite_map.js 中的说明 -->
        <i class="icon" :style="{backgroundPosition:oSpriteMap[summary.icon]}"></i>
        <!-- 该款产品的若干标签 -->
        <p class="tags">{{summary.tags}}</p>
    </div>
</template>

<script>
// import {nWindowHeight, nHeaderHeight} from '../../js/common.js';
import {oSpriteMap} from '../../js/sprite_map.js';

export default {
    props: {
        summary: {
            type: Object,
        },
    },
    data(){
        return {
            oSpriteMap,
        };
    },
};
</script>

<style lang="scss" scoped>

.summary{
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
        line-height: 16px; height: 48px; overflow: hidden;
        text-align: center;
        color: #9b9b9b;
        margin-top: 20px;
    }
    .icon{
        width: 22px; height: 22px;
        position: absolute;
        left: 5px; bottom: 10px;
        background:{
            image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
            size: 761px 809px;
        }
    }
    .tags{
        font-size: 10px;
        color: #9b9b9b;
        position: absolute;
        left: 20px; bottom: 10px;
        width: 80%;
        line-height: 14px;
        font-size: 10px;
    }
}
</style>
