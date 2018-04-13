import Vue from 'vue';
import Vuex from 'vuex';

// import cart from './modules/cart';
// import member from './modules/member';
// import order from './modules/order';

Vue.use(Vuex);

export default new Vuex.Store({
    // modules: {
    //     cart,
    //     member,
    //     order,
    // },
    strict: process.env.NODE_ENV !== 'production',
    state: {
        // 购物车状态
        cart: {
            list: [], // 购物车列表
        },

        // 订单的状态
        order: {
            list: [],
        },
    },
    getter: {
        orderSum(state){
            let nSum = 0;
            state.order.list.forEach(item=>{
                nSum += item.amount * item.price;
            });
            return nSum;
        },
    },
    mutations: {

        // 购物车的状态
        // 向购物车里添加一个商品
        addToCart(state, item){
            state.cart.list.unshift(item);
        },
        // 购物车某商品数量加一
        incrementAmount(state, index){
            state.cart.list[index].amount++;
        },
        // 购物车某商品数量减一
        decrementAmount(state, index){
            state.cart.list[index].amount--;
        },
        // 选中或不选某款商品
        switchCheck(state, index){
            state.cart.list[index].checked = !state.cart.list[index].checked;
        },

        // 订单的状态
        createOrder(state, list){
            state.order.list = list;
        },
    },
});
