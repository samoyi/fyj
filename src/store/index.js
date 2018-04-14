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

        // 当前订单的状态
        order: {
            list: [],
        },

        // 用户的状态。包括用户信息、历史订单、优惠券、消息
        user: {

        },
    },
    getters: {
        // 购物车已选商品总金额
        cartCheckedSum(state){
            let nSum = 0;
            state.cart.list.forEach(item=>{
                if (item.checked){
                    nSum += item.amount * item.price;
                }
            });
            return nSum;
        },
        // 购物车已选商品总数量
        cartCheckedAmount(state){
            let nAmount = 0;
            state.cart.list.forEach(item=>{
                if (item.checked){
                    nAmount += item.amount;
                }
            });
            return nAmount;
        },

        // 当前订单总金额
        // 当前订单为订单列表中的第一项
        curOrderSum(state){
            if (state.order.list.length){
                let nSum = 0;
                // console.log(state.order.list);
                // console.log(state.order.list[0]);
                // console.log(state.order.list[0].items);
                state.order.list[0].items.forEach(item=>{
                    nSum += item.amount * item.price;
                });
                return nSum;
            }
            else {
                return 0;
            }
        },
        orderItemAmount(state){
            if (state.order.list.length){
                console.log(state.order.list);
                console.log(state.order.list[0]);
                console.log(state.order.list[0].items);
                return state.order.list[0].items.length;
            }
            else {
                return 0;
            }
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
        // 清空购物车
        emptyCart(state){
            state.cart.list = [];
        },

        // 订单的状态
        // 创建订单
        // createOrder(state, list){
        //     state.order.list = list;
        // },
        // 支付成功后提交订单
        paid(state){
            // state.user.order.unshift();
        },
        // 进入支付流程后，创建一个未支付的订单
        // 同时清空购物车里已经进入支付的商品
        unpaid(state, order){
            // let aChecked = state.cart.list.filter(item=>item.checked);
            state.order.list.unshift(order);
            state.cart.list = state.cart.list.filter(item=>!item.checked);
        },

        // 用户的状态
        // 加载从数据库读取到的用户信息
        loadUser(state, info){
            state.user = info;
        },
    },
});
