<template>
    <section class="cartList" v-if="list.length">
        <div v-for="(item,index) in list" :key="index">
            <i class="checkbox" :class="{checked: item.checked}"
                    @click="switchCheck(index)">
                √
            </i>
            <router-link :to="'/detail/'+item.id">
                <img :src="item.thumbnail" :alt="item.name" />
            </router-link>
            <p class="name">{{item.name}}</p>
            <p class="spec">规格: {{item.spec}}</p>
            <p class="price">{{Number.parseFloat(item.price)}}×{{item.amount}}</p>
            <div class="amount">
                <i class="sub" @click="amountSub(index)">-</i>
                <span class="num">{{item.amount}}</span>
                <i class="add" @click="amountAdd(index)">+</i>
            </div>
        </div>
        <div class="edit">
            <input type="button" value="删除选中项" @click="deleteSelected" />
            <input type="button" value="全选" @click="allselect" />
            <input type="button" value="反选" @click="unselected" />
        </div>
    </section>
    <section class="emptyCart" v-else>
        购物车为空
    </section>
</template>

<script>

export default {
    data(){
        return {
            prevCart: {},
        };
    },
    computed: {
        list(){
            return this.$store.state.user.cart;
        },
    },
    methods: {
        // 保存之前的购物车，如果后端保存失败，则前端恢复
        saveCart(){
            this.prevCart = JSON.parse(JSON.stringify(this.$store.state.user.cart));
        },
        // 将整个购物车发送到后端，整体更新
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
        switchCheck(index){
            // this.$parent.$parent.cartList[index].checked = !this.$parent.$parent.cartList[index].checked;
            this.$store.commit('switchCheck', index);

            let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            let oPostBody = {
                act: 'switchCheck',
                index: JSON.stringify(index),
            };
            this.$http.post(sURL, oPostBody, {emulateJSON: true})
                .then(res=>{
                    if (res.body.trim() !== 'true'){
                        this.$store.commit('switchCheck', index);
                    }
                })
                .catch(err=>{
                    this.$store.commit('switchCheck', index);
                    throw new Error(err);
                });
        },
        amountSub(index){
            // this.$parent.$parent.cartList[index].amount = --this.$parent.$parent.cartList[index].amount || 1;
            if (this.list[index].amount === 1){
                return;
            }
            this.$store.commit('decrementAmount', index);

            // 删除不需要传输的缩略图、名称
            // let postProduct = JSON.parse(JSON.stringify(this.$parent.$parent.cartList[index]));
            // delete postProduct.thumbnail;
            // delete postProduct.name;
            // delete postProduct.price;
            //
            // let sURL = 'http://www.fuyj.com.cn/ajax/cart_change.php';
            // let data = 'cart=' + JSON.stringify(postProduct);
            // let fnSuccessCallback = (res)=>{
            //     console.log(res);
            // };
            // AJAX_POST(sURL, data, fnSuccessCallback);
            let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            let oPostBody = {
                act: 'decrement',
                // {emulateJSON: true} 设置会将对象的数字值转化为字符串，因此要先
                // stringify
                index: JSON.stringify(index),
            };

            this.$http.post(sURL, oPostBody, {emulateJSON: true})
                .then(res=>{
                    // 创建为一个未支付的订单，该行为会同时删除购物车中已提交的商品
                    if (res.body.trim() !== 'true'){
                        this.$store.commit('incrementAmount', index);
                    }
                })
                .catch(err=>{
                    this.$store.commit('incrementAmount', index);
                    throw new Error(err);
                });
        },
        amountAdd(index){
            // ++this.$parent.$parent.cartList[index].amount;
            if (this.list[index].amount === 9){
                return;
            }
            this.$store.commit('incrementAmount', index);

            // 删除不需要传输的缩略图、名称
            // let postProduct = JSON.parse(JSON.stringify(this.$parent.$parent.cartList[index]));
            // delete postProduct.thumbnail;
            // delete postProduct.name;
            // delete postProduct.price;
            //
            // let sURL = 'http://www.fuyj.com.cn/ajax/cart_change.php';
            // let data = 'cart=' + JSON.stringify(postProduct);
            // let fnSuccessCallback = (res)=>{
            //     console.log(res);
            // };
            // AJAX_POST(sURL, data, fnSuccessCallback);
            let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            let oPostBody = {
                act: 'increment',
                // {emulateJSON: true} 设置会将对象的数字值转化为字符串，因此要先
                // stringify
                index: JSON.stringify(index),
            };

            this.$http.post(sURL, oPostBody, {emulateJSON: true})
                .then(res=>{
                    // 创建为一个未支付的订单，该行为会同时删除购物车中已提交的商品
                    if (res.body.trim() !== 'true'){
                        this.$store.commit('decrementAmount', index);
                    }
                })
                .catch(err=>{
                    this.$store.commit('decrementAmount', index);
                    throw new Error(err);
                });
        },

        deleteSelected(aIndexes){
            this.$store.commit('deleteCartItems'
                , this.$store.getters.cartChecked.indexes);

            this.saveCart();
            this.sendCart();
            // let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            // let oPostBody = {
            //     act: 'switchCheck',
            //     index: JSON.stringify(index),
            // };
            // this.$http.post(sURL, oPostBody, {emulateJSON: true})
            //     .then(res=>{
            //         if (res.body.trim() !== 'true'){
            //             this.$store.commit('switchCheck', index);
            //         }
            //     })
            //     .catch(err=>{
            //         this.$store.commit('switchCheck', index);
            //         throw new Error(err);
            //     });
        },
        allselect(){
            this.$store.commit('seleteAllCartItems');
            this.saveCart();
            this.sendCart();
        },
        unselected(){
            this.list.forEach((item, index)=>{
                this.switchCheck(index);
            });
            this.saveCart();
            this.sendCart();
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
        height: 50px;
        input{
            height: 50%;
            position: absolute; top: 0; bottom: 0; margin: auto;
        }
        input:nth-child(1){
            width: 20%;
            left: 15%;
        }
        input:nth-child(2){
            width: 10%;
            left: 50%;
        }
        input:nth-child(3){
            width: 10%;
            left: 75%;
        }
    }
}
.emptyCart{
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
}
</style>
