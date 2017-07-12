<template>
    <menu>
        <div class="order" :class="{orderCur: (curIndex===0)}" @click="setCurItem(0)">
            <i></i>
            <span style="{}">我的订单</span>
        </div>
        <div class="card" :class="{cardCur: (curIndex===1)}" @click="setCurItem(1)">
            <i></i>
            <span>我的优惠券</span>
        </div>
        <div class="addr" :class="{addrCur: (curIndex===2)}" @click="setCurItem(2)">
            <i></i>
            <span>管理地址</span>
        </div>
        <div class="message" :class="{messageCur: (curIndex===3)}" @click="setCurItem(3)">
            <i></i>
            <span>系统消息</span>
        </div>
    </menu>
</template>

<script>
    export default {
        props: ["curIndex"],
        data: function () {
            return {};
        },
        methods: {
            setCurItem(index){
                this.$parent.curIndex = index;
            },
        },
    };

</script>

<style lang="scss" scoped>
menu{
    width: 100%; height: 61px;
    background: white;
    >div{
        color: #9b9b9b;
        width: 25%; height: 100%;
        box-sizing: border-box;
        border-right: 1px solid #dddddd;
        float: left;
        position: relative;
        i{
            width: 22px; height: 22px;
            display: block;
            position: absolute; left: 50%; margin-left: -11px;
            top: 11px;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                size: 761px 809px;
            }
        }
        span{
            position: absolute;
            top: 40px;
            width: 100%;
            text-align: center;
            font-size: 12px;
        }
    }
    >div:last-child{
        border-right: none;
    }
    .order{
        i{
            background-position: -155px -15px;
        }
    }
    .orderCur{
        i{
            background-position: -155px -47px;
        }
        span{
            color: #17919f;
        }
    }
    .card{
        i{
            background-position: -155px -80px;
        }
    }
    .cardCur{
        i{
            background-position: -155px -111px;
        }
        span{
            color: #17919f;
        }
    }
    .addr{
        i{
            background-position: -155px -143px;
        }
    }
    .addrCur{
        i{
            background-position: -155px -175px;
        }
        span{
            color: #17919f;
        }
    }
    .message{
        i{
            background-position: -155px -207px;
        }
    }
    .messageCur{
        i{
            background-position: -155px -239px;
        }
        span{
            color: #17919f;
        }
    }
}
</style>
