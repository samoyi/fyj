<template>
    <section class="cartList" v-if="list.length">
        <div v-for="(item,index) in list">
            <i class="checkbox" :class="{checked: item.checked}" @click="switchCheck(index)">√</i>
            <img :src="item.thumbnail" :alt="item.name" @click="toDetail(item.id)" />
            <p class="name">{{item.name}}</p>
            <p class="spec">规格: {{item.spec}}</p>
            <p class="price">{{Number.parseFloat(item.price)}}×{{item.amount}}</p>
            <div class="amount">
                <i class="sub" @click="amountSub(index)">-</i>
                <span class="num">{{item.amount}}</span>
                <i class="add" @click="amountAdd(index)">+</i>
            </div>
        </div>
    </section>
</template>

<script>

    import {toDetail, AJAX_GET, AJAX_POST} from "../../js/common.js";

    export default {
        props: ["list"],
        data() {
            return {
            };
        },
        methods: {
            switchCheck(index){
                this.$parent.$parent.cartList[index].checked = !this.$parent.$parent.cartList[index].checked;

                // 删除不需要传输的缩略图、名称
                let postProduct = JSON.parse(JSON.stringify(this.$parent.$parent.cartList[index]));
                delete postProduct.thumbnail;
                delete postProduct.name;
                delete postProduct.price;

                let sURL = "http://www.fuyj.com.cn/ajax/cart_change.php",
                    data = "cart=" + JSON.stringify(postProduct),
                    fnSuccessCallback = (res)=>{
                        console.log(res)
                    };
                // AJAX_GET(sURL+"?"+data, fnSuccessCallback);
                AJAX_POST(sURL, data, fnSuccessCallback);
            },
            amountSub(index){
                this.$parent.$parent.cartList[index].amount = --this.$parent.$parent.cartList[index].amount || 1;

                // 删除不需要传输的缩略图、名称
                let postProduct = JSON.parse(JSON.stringify(this.$parent.$parent.cartList[index]));
                delete postProduct.thumbnail;
                delete postProduct.name;
                delete postProduct.price;

                let sURL = "http://www.fuyj.com.cn/ajax/cart_change.php",
                    data = "cart=" + JSON.stringify(postProduct),
                    fnSuccessCallback = (res)=>{
                        console.log(res)
                    };
                AJAX_POST(sURL, data, fnSuccessCallback);
            },
            amountAdd(index){
                ++this.$parent.$parent.cartList[index].amount;

                // 删除不需要传输的缩略图、名称
                let postProduct = JSON.parse(JSON.stringify(this.$parent.$parent.cartList[index]));
                delete postProduct.thumbnail;
                delete postProduct.name;
                delete postProduct.price;

                let sURL = "http://www.fuyj.com.cn/ajax/cart_change.php",
                    data = "cart=" + JSON.stringify(postProduct),
                    fnSuccessCallback = (res)=>{
                        console.log(res)
                    };
                AJAX_POST(sURL, data, fnSuccessCallback);
            },
            toDetail,
        },
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.cartList{
    >div{
        height: 122px;
        margin-bottom: 10px;
        position: relative;
        background: white;
        .checkbox{
            width: 25px; height: 25px; line-height: 25px;
            box-sizing: border-box;
            color: #9b9b9b;
            border: 1px solid;
            border-radius: 50%;
            position: absolute;
            left: 14px; top: 49px;
            text-align: center;
        }
        .checked{
            border: none;
            background-color: #17919f;
            color: white;
        }
        img{
            width: 75px; height: 75px;
            position: absolute;
            top: 25px; left: 48px;
        }
        .name{
            position: absolute;
            top: 25px; left: 133px;
            font-size: 14px;
        }
        .spec{
            position: absolute;
            top: 54px; left: 133px;
            font-size: 12px;
            color: #9b9b9b;
        }
        .price{
            position: absolute;
            top: 70px; left: 133px;
            font-size: 12px;
            color: #17919f;
        }
        .amount{
            font-size: 12px;
            position: absolute;
            top: 62px; right: 18px;
            $height: 31px;
            width: 88px; height: $height;
            i{
                height: 31px; width: $height;
                line-height: $height;
                position: absolute;
                box-sizing: border-box;
                border: 1px solid #ebebeb;
                border-radius: 50%;
                text-align: center;
            }
            .num{
                position: absolute;
                top: 0;
                left: 40px;
                line-height: $height;
            }
            .sub{
                left: 0px; top: 0;
            }
            .add{
                right: 0px; top: 0;
            }
        }
    }
    >div:last-child{
        margin-bottom: 0;
    }
}
</style>
