<template>
    <section class="order">
        <div class="noOrder" v-if="!list">
            <img src="" />
            <p>
                您当前还没有订单<br />快去购物吧
            </p>
        </div>
        <ul v-if="list">
            <li v-for="item in list">
                <span>订单编号： {{item.number}}</span>
                <span >{{orderState(item.state)}}</span>
                <img :src="item.thumbnail" alt="item.name" />
                <span>{{item.spec}}</span>
                <span>¥{{item.price}}×{{item.amount}}</span>
                <span>共{{item.amount}}件商品 合计：¥{{item.price*item.amount}}</span>
                <div>
                    <span v-if="item.state<3">取消订单</span>
                    <span>{{orderHandle(item.state)}}</span>
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
                }
            },
            orderHandle(state){
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
                }
            },
        },
    };

</script>

<style lang="scss" scoped>
.order{
    .noOrder{
        text-align: center;
        img{
            position: relative; top: 64px;
            width: 87px; height: 87px;
            border: none;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                size: 761px 809px;
                position: -198px -15px;
            }
        }
        p{
            top: 78px;
            color: #9b9b9b;
            font-size: 12px;
            line-height: 16px;
            position: relative;
        }
    }
}
</style>
