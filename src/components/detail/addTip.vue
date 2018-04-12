<template>
    <div class="addTip" v-show="displayTip" :style="{height:sHeight}">
        <div class="tipBox">
            <p>已成功添加至购物车</p>
            <div @click="closeTip">继续购物</div>
            <router-link to="/cart" @click="closeTip" class="toCart">去结算</router-link>
        </div>
    </div>
</template>

<script>

import {nWindowHeight} from '../../js/common.js';

export default {
    props: ['displayTip'],
    data(){
        return {
            sHeight: nWindowHeight + 'px',
        };
    },
    methods: {
        closeTip(){
            this.$parent.displayTip = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.addTip{
    width: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    top: 0;
    z-index: 9;
    .tipBox{
        width: 288px; height: 150px;
        position: absolute; margin: auto; top: 0px; right: 0px; bottom: 0px; left: 0px;
        color: #9b9b9b;
        background: white;
        border-radius: 10px;
        p{
            height: 97px; line-height: 97px;
            text-align: center;
        }
        div, .toCart{
            width: 50%;
            height: 53px; line-height: 53px;
            text-align: center;
            font-size: 12px;
            box-sizing: border-box;
            border-top: 1px solid;
            position: absolute;
            bottom: 0;
        }
        div{
            border-right: 1px solid;
            border-color: #dddddd;
            left: 0;
        }
        .toCart{
            border-color: #dddddd;
            color: #17919f;
            right: 0;
            text-decoration: none;
        }

    }
}
</style>
