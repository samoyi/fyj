// 当前订单的状态

export default {
    strict: process.env.NODE_ENV !== 'production',
    state: {
        curOrderID: '',
        curAddrID: 0,
    },
    getters: {
        // 当前订单总金额
        // 当前订单为订单列表中的第一项
        curOrderSum(state, getters, rootState){
            if (rootState.userModule.user.order.length && state.curOrderID){
                let nSum = 0;

                let oCurOrder = rootState.user.order.find(order=>{
                    return order.id === state.curOrderID;
                });
                oCurOrder.items.forEach(item=>{
                    nSum += item.amount * item.price;
                });
                return nSum;
            }
            else {
                return 0;
            }
        },
        // 当前订单商品数量
        orderItemAmount(state, getters, rootState){
            if (rootState.userModule.user.order.length && state.curOrderID){
                let oCurOrder = rootState.userModule.user.order.find(order=>{
                    return order.id === state.curOrderID;
                });
                return oCurOrder.items.length;
            }
            else {
                return 0;
            }
        },
    },
    mutations: {
        // 记录当前要处理的订单的ID
        setCurOrderID(state, id){
            state.curOrderID = Number.parseInt(id, 10);
        },
        // 当前订单的收货地址ID
        setCurAddrID(state, nID){
            state.curAddrID = nID;
        },
    },
};
