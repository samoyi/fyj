<template>
    <div class="placeOrder" :order="order" v-if="list.length">
        <span class="btn" @click="placeOrder">立即下单</span>
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
            let nSelected = 0;
            this.list.forEach((item, index)=>{
                if (item.checked){ // 只计算选中的
                    nSelected += item.amount;
                    nSum += item.amount * item.price;
                }
            });
            return [nSelected, nSum];
        },
    },
    methods: {
        sendCart(){
            let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            let oPostBody = {
                act: 'updateCart',
                cart: JSON.stringify(this.$store.state.user.cart),
            };
            this.$http.post(sURL, oPostBody, {emulateJSON: true})
                .then(res=>{
                    // 后端保存失败，购物车回滚
                    if (res.body !== 'true'){
                        this.$store.commit('cartRollback', this.prevCart);
                    }
                })
                .catch(err=>{
                    this.$store.commit('cartRollback', this.prevCart);
                    throw new Error(err);
                });
        },
        placeOrder(){
            // 向后端提交订单商品，后端生成订单信息并返回
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
                    // 该提交会删除已经作为订单提交的购物车商品
                    this.$store.commit('unpaid', oCurOrder);
                    // 向后端提交修改后的购物车
                    this.sendCart();
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
