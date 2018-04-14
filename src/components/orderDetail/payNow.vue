<template>
    <div class="payNow" :sum="sum" :freight="freight">
        <span class="btn" @click="pay">立即支付</span>
        <span class="sum">共计：¥{{sum+freight}}</span>
    </div>
</template>

<script>

import {AJAX_POST} from '../../js/common.js';

export default {
    props: ['freight'],
    data(){
        return {
            aSelected: [],
        };
    },
    computed: {
        sum(){
            return this.$store.getters.curOrderSum;
        },
        list(){
            return this.$store.state.order.list;
        },
        // orderInfo(){
        //     let nSum = 0;
        //     let nSelected = 0;
        //     this.$parent.$parent.cartList.forEach((item, index)=>{
        //         if (item.checked){ // 只计算选中的
        //             nSelected += item.amount;
        //             nSum += item.amount * item.price;
        //         }
        //     });
        //     return [nSelected, nSum];
        // },
    },
    methods: {
        pay(){
            console.log('核对是否填了送货时间');
            if (!this.$parent.deliveryInfo.date){
                alert('请选择收货日期');
                return;
            }
            if (!this.$parent.deliveryInfo.hour){
                alert('请选择收货时间');
                return;
            }
            let sendOrderInfo = {
                'products': this.list.map(function(item){
                    return {
                        'id': item.id,
                        'spec': item.spec,
                        'price': item.price,
                        'amount': item.amount,
                    };
                }),
                'sum': this.sum,
                'freight': this.freight,
                'delivery_tel': 133039403940,
                'delivery_consignee': '王富贵',
                'delivery_addr': '北纬路甲一号',
                'delivery_date': this.$parent.deliveryInfo.date,
                'delivery_hour': this.$parent.deliveryInfo.hour,
            };

            let sURL = 'http://www.fuyj.com.cn/ajax/payInfo.php';
            let data = 'payInfo=' + JSON.stringify(sendOrderInfo);
            let fnSuccessCallback = (res)=>{
                if (window.confirm('模拟支付。选择支付成功或失败，'
                    + '点击“确定”表示支付成功')){
                    this.$store.commit('paid');
                }
            };
            AJAX_POST(sURL, data, fnSuccessCallback);
        },
    },
};
</script>

<style lang="scss" scoped>
.payNow{
    background:{
        image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
        position: -341px -155px;
        size: 761px 809px;
    }
    width: 100%; height: 64px;
    position: fixed;
    bottom: 0; z-index: 9;
    .btn{
        color: white;
        font-size: 14px;
        width: 103px; text-align: center;
        height: 31px; line-height: 31px;
        position: absolute; right: 17px; top: 16px;
        // background:{
        //     image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
        //     position: -341px -348px;
        //     size: 761px 809px;
        // }
        background:{
            image: url("http://localhost/gits/fyj/data/image/icons/temp3.png");
            position: 0px -120px;
            size: 325px 154px;
        }
        text-decoration: none;
    }
    .sum{
        color: #17919f;
        line-height: 64px;
        font-size: 12px;
        margin-left: 30px;
    }
}
</style>
