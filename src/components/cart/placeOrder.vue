<template>
    <div class="placeOrder" :order="order">
        <span class="btn" @click="placeOrder">立即下单</span>
        <span>已选{{orderInfo[0]}}</span>
        <span>应付{{orderInfo[1]}}</span>
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
}
</style>
