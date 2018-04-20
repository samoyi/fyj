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
        // 当前产品详情页
        detail: {},

        // 当前订单的状态
        order: {
            curOrderID: '',
            curAddrID: 0,
        },

        // 用户的状态。包括用户信息、历史订单、优惠券、消息
        user: {
            cart: [], // 购物车列表
            order: [],
        },
    },
    getters: {
        // 购物车已选商品
        cartChecked(state){
            let indexes = [];
            let items = state.user.cart.filter((item, index)=>{
                if (item.checked){
                    indexes.push(index);
                    return true;
                }
            });
            return {
                items,
                indexes,
            };
        },

        // 购物车已选商品的序号
        // cartCheckedIndexes(state, getters){
        //     getters.cartChecked.map(item=>item)
        //     return state.user.cart.filter(item=>{
        //         if (item.checked){
        //             nSum += item.amount * item.price;
        //         }
        //     });
        // },

        // 购物车已选商品总金额
        cartCheckedSum(state, getters){
            // let nSum = 0;
            // state.user.cart.forEach(item=>{
            //     if (item.checked){
            //         nSum += item.amount * item.price;
            //     }
            // });
            // getters.cartChecked.items.forEach(item=>{
            //     nSum += item.amount * item.price;
            // });
            return getters.cartChecked.items.reduce((accu, curr)=>{
                return accu + curr.amount * curr.price;
            }, 0);
            // return nSum;
        },
        // 购物车已选商品总数量
        cartCheckedAmount(state, getters){
            // let nAmount = 0;
            // state.user.cart.forEach(item=>{
            //     if (item.checked){
            //         nAmount += item.amount;
            //     }
            // });
            // return nAmount;
            return getters.cartChecked.items.reduce((accu, curr)=>{
                return accu + curr.amount;
            }, 0);
        },

        // 当前订单总金额
        // 当前订单为订单列表中的第一项
        curOrderSum(state){
            if (state.user.order.length){
                let nSum = 0;
                state.user.order[0].items.forEach(item=>{
                    nSum += item.amount * item.price;
                });
                return nSum;
            }
            else {
                return 0;
            }
        },
        orderItemAmount(state){
            if (state.user.order.length){
                return state.user.order[0].items.length;
            }
            else {
                return 0;
            }
        },
    },
    mutations: {

        // 加载从数据库读取到的用户信息
        loadUser(state, info){
            state.user = info;
        },

        // 购物车的状态
        // 向购物车里添加一个商品
        addToCart(state, item){
            let bExisted = state.user.cart.some((val, index)=>{
                // 已有同款商品，直接增加数量
                if (val.id === item.id && val.spec === item.spec){
                    val.amount += item.amount;
                    return true;
                }
            });
            if (!bExisted){
                state.user.cart.unshift(item);
            }
        },
        // 购物车某商品数量加一
        incrementAmount(state, index){
            state.user.cart[index].amount++;
        },
        // 购物车某商品数量减一
        decrementAmount(state, index){
            state.user.cart[index].amount--;
        },
        // 选中或不选某款商品
        switchCheck(state, index){
            state.user.cart[index].checked
                = !state.user.cart[index].checked;
        },
        // 删除购物车中的若干项
        deleteCartItems(state, aIndexes){
            // 序号从大到小排序，删除数组项的时候不影响前面的项
            let indexes = aIndexes.sort((m, n)=>{
                return n - m;
            });
            indexes.forEach(item=>{
                state.user.cart.splice(item, 1);
            });
        },
        // 全选购物车
        seleteAllCartItems(state){
            state.user.cart.forEach(item=>{
                item.checked = true;
            });
        },
        // 清空购物车
        emptyCart(state){
            state.user.cart = [];
        },
        // 购物车回滚 用于后端保存失败后的回滚
        cartRollback(state, oCart){
            state.user.cart = oCart;
        },

        // 订单的状态
        // 创建订单
        // createOrder(state, list){
        //     state.order.list = list;
        // },
        setCurOrderID(state, id){
            state.order.curOrderID = Number.parseInt(id, 10);
        },
        // 支付成功后提交订单
        paid(state, id){
            state.user.order.some(order=>{
                if (order.id === Number.parseInt(id, 10)){
                    order.status = 1;
                    order.items.forEach(item=>{
                        delete item.checked;
                    });
                    return true;
                }
            });
        },
        // 进入支付流程后，创建一个未支付的订单
        // 同时清空购物车里已经进入支付的商品
        unpaid(state, order){
            // let aChecked = state.cart.list.filter(item=>item.checked);
            delete order.checked;
            state.user.order.unshift(order);
            state.user.cart = state.user.cart.filter(item=>!item.checked);
        },

        // 添加新收货地址
        modifyAddrs(state, addrs){
            state.user.addr = addrs;
        },

        // 当前订单的收货地址ID
        setCurAddrID(state, nID){
            state.order.curAddrID = nID;
        },
    },
});
