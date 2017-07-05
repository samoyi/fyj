<template>
    <section class="cartList" v-if="list">
        <div v-for="(item,index) in list">
            <i class="checkbox" :class="{checked: order[index][3]}" @click="switchCheck(index)">√</i>
            <img :src="item.thumbnail" :alt="item.name" />
            <p class="name">{{item.name}}</p>
            <p class="spec">规格: {{item.spec}}</p>
            <p class="price">{{item.price}}×{{amount[index]}}</p>
            <div class="amount">
                <i class="sub" @click="amountSub(index)">-</i>
                <span class="num">{{amount[index]}}</span>
                <i class="add" @click="amountAdd(index)">+</i>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        props: ["list"],
        data() {
            return {
                amount: [], // 每款商品的数量。取回购物车数据后，根据数据更新
                order: [
                    ["id1", "1磅", 2, false],
                    ["id2", "2磅", 1, true],
                ],
            }
        },
        methods: {
            switchCheck(index){
                this.order[index].splice(3, 1, this.order[index][3] ? false : true);
            },
            amountSub(index){
                this.amount.splice(index, 1, (--this.amount[index] || 1));
            },
            amountAdd(index){
                this.amount.splice(index, 1, ++this.amount[index]);
            },
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
