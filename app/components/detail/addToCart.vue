<template>
    <div class="addToCart">
        <div class="chooseBox" v-show="bDispalyChooseBox">
            <img class="thumbnail" />
            <p class="name"></p>
            <p class="price"></p>
            <div>
                <span>规格</span>
                <i></i>
            </div>
            <div>
                <span>数量</span>
                <i></i>
                <span></span>
                <i></i>
            </div>
        </div>
        <div class="btnArea">
            <span class="btn" @click="displayChooseBox">加入购物车</span>
        </div>
    </div>
</template>

<script>

export default {
    props: ["notice"],
    data() {
        return {
            bDispalyChooseBox: false,
        }
    },
    methods: {
        displayChooseBox(){
            if(!this.bDispalyChooseBox){ // 显示选择框
                this.bDispalyChooseBox = true;
            }
            else{ // 确定加入购物车
                this.bDispalyChooseBox = false;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.addToCart{
    width: 100%; height: 227px;
    position: fixed;
    bottom: 0; z-index: 9;
    .btnArea{
        width: 100%; height: 64px;
        background-color: royalblue;
        position: absolute; bottom: 0;
    }
    .chooseBox{
        width: 100%; height: 163px;
        background-color: white;
    }
}
</style>
