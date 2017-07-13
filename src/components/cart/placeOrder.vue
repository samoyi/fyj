<template>
    <div class="placeOrder" :order="order">
        <span class="btn" @click="placeOrder">立即下单</span>
        <span class="seleted">已选 {{orderInfo[0]}} 件</span>
        <span class="sum">应付总额：¥{{orderInfo[1]}}</span>
    </div>
</template>

<script>

export default {
    props: ["order"],
    data() {
        return {
            aSelected: [],
        }
    },
    methods: {
        placeOrder(){
            let aSelected = this.$parent.$parent.cartList.filter((item)=>{
                return item.checked;
            });
            alert("跳转到微信授权页\n下单成功后清除已经下订单的商品");
            console.log(aSelected);
        },
    },
    computed: {
        orderInfo(){
            let nSum = 0,
                nSelected = 0;
            this.$parent.$parent.cartList.forEach((item, index)=>{
                if(item.checked){ // 只计算选中的
                    nSelected += item.amount;
                    nSum += item.amount *item.price;
                }
            });
            return [nSelected, nSum];
        }
    },
}
</script>

<style lang="scss" scoped>
.placeOrder{
    width: 100%; height: 64px;
    position: fixed;
    bottom: 0; z-index: 9;
    background: yellow;
    .btn{
        color: white;
        font-size: 14px;
        width: 103px; text-align: center;
        height: 31px; line-height: 31px;
        position: absolute; right: 17px; top: 16px;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
            position: -341px -348px;
            size: 761px 809px;
        }
    }
    .seleted, .sum{
        color: #17919f;
        line-height: 64px;
        font-size: 12px;
        margin-left: 30px;
    }
}
</style>
