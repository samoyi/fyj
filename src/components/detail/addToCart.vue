<!-- 第一次点击“加入购物车”时弹出的窗口 -->
<template>
    <div class="addToCart" v-if="productSummary">
        <div class="chooseBox" v-show="displayBox">
            <img class="thumbnail" :src="productSummary.images[0]" />
            <p class="name">{{productSummary.name}}</p>
            <p class="price" v-if="productSummary.price">¥{{productSummary.price[selectedSpecIndex]}}</p>
            <div class="spec">
                <span>规格</span>
                <i v-for="(item,index) in productSummary.spec" :key="index"
                    :class="{selected: selectedSpecIndex===index}"
                    @click="changeSpec(index)">
                    {{item}}
                </i>
            </div>
            <div class="amount">
                <span>数量</span>
                <i class="sub" @click="amountSub">-</i>
                <span class="num">{{amount}}</span>
                <i class="add" @click="amountAdd">+</i>
            </div>
        </div>
        <div class="btnArea">
            <span class="btn" @click="switchChooseBox">加入购物车</span>
        </div>
    </div>
</template>

<script>

export default {
    props: ['productSummary', 'displayBox'],
    data(){
        return {
            selectedSpecIndex: 0,
            amount: 1,
        };
    },
    methods: {
        // 点击 加入购物车 按钮后，更新父组件的bDispalyChooseBox，切换选择框和遮罩的隐藏
        // 或显示状态。
        switchChooseBox(){
            // 如果在已显示的状态下点击 加入购物车，则说明确实要将商品加入购物车
            if (this.$parent.bDispalyChooseBox){
                let productInfo = {
                    'id': this.$parent.id,
                    'thumbnail': 'http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/index/new/0.jpg',
                    'name': this.$parent.productSummary.name,
                    'spec': this.$parent.productSummary.spec[this.selectedSpecIndex],
                    'price': this.$parent.productSummary.price[this.selectedSpecIndex],
                    'amount': this.amount,
                    'checked': true,
                };

                // 保存之前的购物车，如果后端保存失败，则前端恢复
                let oPrevCart = JSON.parse(JSON.stringify(this.$store.state.userModule.cart));
                this.$store.commit('addToCart', productInfo);

                // 每次更新购物车都将购物车数据发送到后端
                let sURL = 'http://localhost/gits/fyj/data/ajax.php';
                let oPostBody = {
                    act: 'updateCart',
                    cart: JSON.stringify(this.$store.state.userModule.cart),
                };
                this.$http.post(sURL, oPostBody, {emulateJSON: true})
                    .then(res=>{
                        // 后端保存失败，购物车回滚
                        if (res.body !== 'true'){
                            this.$store.commit('cartRollback', oPrevCart);
                        }
                    })
                    .catch(err=>{
                        this.$store.commit('cartRollback', oPrevCart);
                        throw new Error(err);
                    });

                // 添加完之后添加选项恢复到初始状态
                this.selectedSpecIndex = 0;
                this.amount = 1;
                this.$parent.displayTip = true;
            }
            // 显示或隐藏半透明遮罩
            this.$emit('switchChooseBox');
        },
        amountSub(){
            this.amount = --this.amount || 1;
        },
        amountAdd(){
            this.amount++;
        },
        changeSpec(index){
            this.selectedSpecIndex = index;
        },
    },
};
</script>

<style lang="scss" scoped>
.addToCart{
    width: 100%; height: 227px;
    position: fixed;
    bottom: 0; z-index: 9;
    .btnArea{
        width: 100%; height: 64px;
        background:{
            image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
            position: -341px -155px;
            size: 761px 809px;
        }
        position: absolute; bottom: 0;
        .btn{
            width: 218px; height: 40px;
            position: absolute; margin:auto; top: 0; right: 0; bottom: 0; left:0;
            line-height: 40px;
            text-align: center;
            color: white;
            // background:{
            //     image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
            //     position: -341px -298px;
            //     size: 761px 809px;
            // }
            background:{
                image: url("http://localhost/gits/fyj/data/image/icons/temp3.png");
                position: 0px -70px;
                size: 325px 154px;
            }
        }
    }
    .chooseBox{
        width: 100%; height: 214px;
        background-color: white;
        position: absolute; bottom: 64px;
        img{
            width: 75px; height: 75px;
            margin: 14px auto auto 14px;
        }
        .name{
            font-size: 14px;
            color: #1e1e1e;
            position: absolute; top: 30px; left: 100px;
        }
        .price{
            font-size: 10px;
            color: #17919f;
            position: absolute; top: 54px; left: 100px;
        }
        $divHeight: 40px;
        div{
            font-size: 10px;
            height: $divHeight;
            position: absolute; left: 14px;
            >span:first-child{
                margin-right: 15px;
            }
            i{
                display: inline-block;
                width: $divHeight; height: $divHeight; line-height: $divHeight;
                border-radius: 50%;
                text-align: center;
            }
        }
        .spec{
            top: 110px;
            i{
                margin-right: $divHeight;
                background-color: #ebebeb;
            }
            .selected{
                background-color: #17919f;
                color: white;
            }
        }
        .amount{
            line-height: $divHeight;
            top: 160px;
            i{
                position: absolute;
                box-sizing: border-box;
                border: 1px solid #ebebeb;
            }
            .num{
                position: absolute;
                top: 0;
                left: 96px;
            }
            .sub{
                left: 38px; top: 0;
            }
            .add{
                left: 118px; top: 0;
            }
        }
    }
}
</style>
