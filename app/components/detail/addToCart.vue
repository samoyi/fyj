<template>
    <div class="addToCart" v-if="productSummary">
        <div class="chooseBox" v-show="displayBox">
            <img v-if="productSummary[0]" class="thumbnail" :src="productSummary[0][0]" />
            <p class="name">{{productSummary[1]}}</p>
            <p class="price" v-if="productSummary[3]">¥{{productSummary[3][0]}}</p>
            <div v-if="productSummary[4]">
                <span>规格</span>
                <i v-for="item in productSummary[4]">{{item}}</i>
            </div>
            <div>
                <span>数量</span>
                <i>-</i>
                <span>1</span>
                <i>+</i>
            </div>
        </div>
        <div class="btnArea">
            <span class="btn" @click="switchChooseBox">加入购物车</span>
        </div>
    </div>
</template>

<script>

export default {
    props: ["productSummary", "displayBox"],
    data() {
        return {
        }
    },
    methods: {
        // 点击 加入购物车 按钮后，更新父组件的bDispalyChooseBox，切换选择框和遮罩的隐藏
        // 或显示状态。
        switchChooseBox(){
            // 如果在已显示的状态下点击 加入购物车，则说明确实要将商品加入购物车
            if(this.$parent.bDispalyChooseBox){
                alert("已经加入购物车");
            }

            // 显示或隐藏半透明遮罩
            this.$emit("switchChooseBox");
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
        position: relative;
        img{
            width: 75px; height: 75px;
            margin: 14px auto auto 14px;
        }
        .name{
            font-size: 14px;
            margin-top: 32px;
            color: #1e1e1e;
            position: absolute; top: 32px; left: 50px;
        }
        .price{
            font-size: 10px;
            color: #17919f;
            position: absolute; top: 52px; left: 50px;
        }
        div{
            font-size: 10px;
            position: absolute; top: 32px; left: 14px;
        }
    }
}
</style>
