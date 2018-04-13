<!-- 规格 -->
<template>
    <div class="spec" v-if="specInfo">
        <h3>
            <i></i>
            <span>规格</span>
        </h3>
        <p v-html="specInfo.des"></p>
        <i :style="{backgroundPosition:oSpriteMap[specInfo.icon]}"></i><!--现在的图标是刀叉，以后可能还会变成其他的-->
        <ul>
            <li v-for="item in specInfo.list" :key="item" v-html="item"></li>
        </ul>
    </div>
</template>

<script>

import {oSpriteMap} from '../../js/sprite_map.js';

export default {
    props: {
        specInfo: {
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

.spec{
    width: 100%; height: 139px;
    background: white;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
    h3{
        margin-top: 20px;
        vertical-align: middle;
        font-size: 20px; line-height: 20px;
        position: relative;
        span{
            display: inline-block;
            position: absolute;
            left: 30px; top: 0px;
        }
        i{
            width: 22px; height: 22px;
            position: absolute;
            left: 5px; top: 0px;
            background:{
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                size: 761px 809px;
                position: -88px -183px;
            // -88px -155px 黑色的
            }
        }
    }
    >p{
        margin-left: 4%; width: 92%;
        font-size: 11px;
        color: #9b9b9b;
        margin-top: 56px;
    }
    >i{
        width: 22px; height: 22px;
        position: absolute;
        left: 14px; top: 79px;
        background:{
            image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
            size: 761px 809px;
        }
    }
    >ul{
        position: absolute;
        left: 44px; top: 72px;
        line-height: 18px;
        font-size: 11px;
        color: #9b9b9b;
    }
}
</style>
