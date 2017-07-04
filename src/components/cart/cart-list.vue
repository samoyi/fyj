<template>
    <section class="cartList" v-if="list">
        <div v-for="(item,index) in list">
            <img :src="item.thumbnail" :alt="item.name" />
            <p class="name">{{item.name}}</p>
            <p class="name">规格: {{item.spec}}</p>
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
                amount: [], // 取回购物车数据后，根据数据更新
            }
        },
        methods: {
            amountSub(index){
                this.amount[index] = --this.amount[index] || 1;
            },
            amountAdd(){
                this.amount[index]++;
            },
        },
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.cartList{
    >div{
        .amount{
            top: 160px;
            i{
                position: absolute;
                box-sizing: border-box;
                border: 1px solid #ebebeb;
            }
            .num{
                position: absolute;
                top: 0;
                left: 96px;
            }
            .sub{
                left: 38px; top: 0;
            }
            .add{
                left: 118px; top: 0;
            }
        }
    }
}
</style>
