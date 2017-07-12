<template>
    <section class="order">
        <div class="noOrder" v-if="!list">
            <div></div>
            <p>
                您当前还没有订单<br />快去购物吧
            </p>
        </div>
        <ul class="orderList" v-if="list">
            <li v-for="(item, index) in list">
                <div class="top">
                    <span>订单编号： {{item.number}}</span>
                    <span >{{orderState(item.state)}}</span>
                </div>
                <div class="middle">
                    <img :src="item.thumbnail" alt="item.name" />
                    <span class="name">{{item.name}}</span>
                    <span class="spec">{{item.spec}}</span>
                    <span class="price">¥{{item.price}}×{{item.amount}}</span>
                </div>
                <div class="bottom">
                    <span>共{{item.amount}}件商品 合计：¥{{item.price*item.amount}}</span>
                    <div>
                        <!-- <span v-if="item.state<3">联系客服取消订单</span> -->
                        <a v-if="item.state<3" href="tel:4006633677">联系客服取消订单</a>
                        <span v-if="getOrderState(item.state)" @click="handleOrder(item.state, index)">{{getOrderState(item.state)}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>

    export default {
        props: ["list"],
        data: function () {
            return {};
        },
        methods: {
            orderState(state){
                switch (state){
                    case 1:{
                        return "未付款";
                    }
                    case 2:{
                        return "已付款";
                    }
                    case 3:{
                        return "已发货";
                    }
                    case 4:{
                        return "已收货";
                    }
                    case 5:{
                        return "已取消";
                    }
                }
            },
            getOrderState(state){
                switch (state){
                    case 1:{
                        return "马上付款";
                    }
                    case 2:{
                        return "";
                    }
                    case 3:{
                        return "确认收货";
                    }
                    case 4:{
                        return "";
                    }
                    case 5:{
                        return "";
                    }
                }
            },
            handleOrder(state, index){
                if( 3===state ){
                    alert("发送确认收货信息");
                    this.$parent.orderList[index].state = 4;
                }
                if( 1===state ){
                    alert("进入支付页面支付 支付成功后怎么刷新这里的状态");
                    this.$parent.orderList[index].state = 2;
                }
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
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
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
