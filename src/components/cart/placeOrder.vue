<template>
    <div class="placeOrder" :order="order" v-if="list.length">
        <span class="btn" @click="placeOrder">立即下单</span>
        <!-- <router-link class="btn" @click="placeOrder" to="/orderDetail">立即下单</router-link> -->
        <span class="seleted">已选 {{cartCheckedAmount}} 件</span>
        <span class="sum">应付总额：¥{{cartCheckedSum}}</span>
    </div>
</template>

<script>

export default {
    props: ['order'],
    data(){
        return {};
    },
    computed: {
        list(){
            return this.$store.state.user.cart;
        },
        cartCheckedSum(){
            return this.$store.getters.cartCheckedSum;
        },
        cartCheckedAmount(){
            return this.$store.getters.cartCheckedAmount;
        },
        aSelected(){
            let aSelected = [];
            this.list.forEach((item, index)=>{
                if (item.checked){ // 只计算选中的
                    aSelected.push(item);
                }
            });
            return aSelected;
        },
        orderInfo(){
            let nSum = 0;
            // let aSelected = [];
            let nSelected = 0;
            this.list.forEach((item, index)=>{
                if (item.checked){ // 只计算选中的
                    // aSelected.push(item);
                    nSelected += item.amount;
                    nSum += item.amount * item.price;
                }
            });
            // this.aSelected = aSelected;
            // this.$parent.$parent.orderInfo.sum = nSum;
            // this.$parent.$parent.orderInfo.list = aSelected;
            return [nSelected, nSum];
        },
    },
    methods: {
        placeOrder(){
            // 向后端提交订单商品，后端生成订单信息并返回
            // let sURL = 'http://red-space.cn/test/ajax.php';
            // let sURL = 'http://127.0.0.1/gits/fyj/data/ajax.php';
            let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            let oPostBody = {
                act: 'createOrder',
                // {emulateJSON: true} 设置会将对象的数字值转化为字符串，因此要先
                // stringify
                items: JSON.stringify(this.aSelected),
                // 0为未支付；1为已支付；2为已经开始制作，不能随意取消
                status: JSON.stringify(0),
            };

            this.$http.post(sURL, oPostBody, {emulateJSON: true})
                .then(res=>{
                    // 创建为一个未支付的订单，该行为会同时删除购物车中已提交的商品
                    let oCurOrder = res.body;
                    this.$store.commit('unpaid', oCurOrder);
                    this.$store.commit('setCurOrderID', oCurOrder.id);
                    this.$router.push('/orderDetail');
                })
                .catch(err=>{
                    throw new Error(err);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.placeOrder{
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
    .seleted, .sum{
        color: #17919f;
        line-height: 64px;
        font-size: 12px;
        margin-left: 30px;
    }
}
</style>
