<template>
    <section class="order">
        <div class="noOrder" v-if="!orderList">
            <div></div>
            <p>
                您当前还没有订单<br />快去购物吧
            </p>
        </div>
        <ul class="orderList" v-if="orderList">
            <li v-for="(item, index) in orderList" :key="index">
                <div class="top">
                    <span>订单编号： {{item.id}}</span>
                    <span>订单状态：{{orderStatus(item.status)}}</span>
                </div>
                <div class="middle" v-for="(item1, index1) in item.items" :key="index1">
                    <img :src="item1.thumbnail" alt="item1.name" />
                    <span class="name">{{item1.name}}</span>
                    <span class="spec">{{item1.spec}}</span>
                    <span class="price">¥{{item1.price}}×{{item1.amount}}</span>
                </div>
                <div class="bottom">
                    <span>共{{getTotalAmount(item.items)}}件商品 合计：¥{{getTotalSum(item.items)}}</span>
                    <div>
                        <span v-if="item.status<2" @click="cancelOrder(item.id)">取消订单</span>
                        <a v-if="item.status===2" href="tel:4006633677">联系客服取消订单</a>
                        <span v-if="getOrderStatus(item.status)" @click="handleOrder(item.status, item.id)">{{getOrderStatus(item.status)}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    data(){
        return {};
    },
    computed: {
        orderList(){
            return this.$store.state.userModule.order;
        },
    },
    methods: {
        getTotalAmount(products){
            return products.reduce(function(totalAmount, item){
                return totalAmount + item.amount;
            }, 0);
        },
        getTotalSum(products){
            return products.reduce(function(totalSum, item){
                return totalSum + item.amount * item.price;
            }, 0);
        },
        orderStatus(status){
            switch (status){
                case 0:{
                    return '未付款';
                }
                case 1:{
                    return '已付款';
                }
                case 2:{
                    return '正在制作';
                }
                case 3:{
                    return '已发货';
                }
                case 4:{
                    return '已收货';
                }
                case 5:{
                    return '已取消';
                }
            }
        },
        getOrderStatus(status){
            switch (status){
                case 0:{
                    return '马上付款';
                }
                case 1:{
                    return '';
                }
                case 2:{
                    return '';
                }
                case 3:{
                    return '确认收货';
                }
                case 4:{
                    return '';
                }
                case 5:{
                    return '';
                }
            }
        },
        handleOrder(status, id){
            if (status === 3){
                // 确认收货
                let sURL = 'http://localhost/gits/fyj/data/ajax.php';
                let oPostBody = {
                    act: 'signFor',
                    id: JSON.stringify(id),
                };
                this.$http.post(sURL, oPostBody, {emulateJSON: true})
                    .then(res=>{
                        if (res.body === 'true'){
                            this.$store.commit('signFor', id);
                        }
                    })
                    .catch(err=>{
                        throw new Error(err);
                    });
            }
            if (status === 0){
                this.$store.commit('setCurOrderID', id); // 设定为当前订单
                this.$router.push('/orderDetail'); // 进入支付页面
            }
        },
        cancelOrder(id){
            let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            let oPostBody = {
                act: 'cancelOrder',
                id: JSON.stringify(id),
            };
            this.$http.post(sURL, oPostBody, {emulateJSON: true})
                .then(res=>{
                    if (res.body === 'true'){
                        this.$store.commit('cancelOrder', id);
                    }
                })
                .catch(err=>{
                    throw new Error(err);
                });
        },
    },
};

</script>

<style lang="scss" scoped>
.order{
    .noOrder{
        text-align: center;
        div{
            margin: 64px auto auto auto;
            width: 87px; height: 87px;
            border: none;
            background:{
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                size: 761px 809px;
                position: -198px -15px;
            }
        }
        p{
            margin-top: 18px;
            color: #9b9b9b;
            font-size: 12px;
            line-height: 16px;
        }
    }
    .orderList{
        width: 100%; height: 156px;
        background-color: #f6f6f6;
        margin-top: 10px;
        >li{
            margin-bottom: 10px;
            .top, .bottom{
                height: 42px;
                background-color: white;
                line-height: 42px;
                color: #9b9b9b;
                font-size: 12px;
            }
            .top{
                span:nth-child(1){
                    margin-left: 14px;
                }
                span:nth-child(2){
                    margin-right: 14px;
                    color: #17919f;
                    display: inline-block;
                    float: right;
                }
            }
            .middle{
                height: 72px;
                background-color: #f8f8f8;
                position: relative;
                img{
                    width: 56px; height: 56px;
                    position: absolute; left: 14px; top: 8px;
                }
                .name{
                    position: absolute;
                    top: 10px;
                    left: 92px;
                }
                .spec{
                    position: absolute;
                    top: 42px;
                    left: 92px;
                    color: #9b9b9b;
                    font-size: 12px;
                }
                .price{
                    position: absolute;
                    top: 10px;
                    right: 14px;
                    font-size: 12px;
                }
            }
            .bottom{
                position: relative;
                >span{
                    margin-left: 14px;
                }
                div{
                    height: 100%;
                    position: absolute;
                    right: 0;
                    top: 0;
                    color: #17919f;
                    a, span{
                        border-radius: 50px/50px;
                        border: 1px solid;
                        padding: 2px 6px;
                        color: #17919f;
                        text-decoration: none;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}
</style>
