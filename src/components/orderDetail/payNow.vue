<template>
    <div class="payNow" :sum="sum" :freight="freight">
        <span class="btn" @click="pay">立即支付</span>
        <span class="sum">共计：¥{{sum+freight}}</span>
    </div>
</template>

<script>

export default {
    props: ["sum", "freight"],
    data() {
        return {
            aSelected: [],
        }
    },
    methods: {
        pay(){
            console.log("核对是否填了送货时间");
            console.log(this.$parent.$parent.orderInfo);
            console.log(this.sum +" "+ this.freight);
            console.log(this.$parent.deliveryInfo);
            let sendOrderInfo = {
                products: [
                    {
                        "id": 10,
                        "spec": "3磅",
                        "amount": 2,
                    },
                    {
                        "id": 10,
                        "name": "一抹茶的温柔治愈",
                        "amount": 2,
                    }
                ],
                "amount": 2,
                "state": 4,
                "freight": 15,
                "delivery_tel": 133039403940,
                "delivery_consignee": "王富贵",
                "delivery_addr": "北纬路甲一号",
                "delivery_date":"2017-7-18",
                "delivery_hour": 18
            };
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
        },
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
