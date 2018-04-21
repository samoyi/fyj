export default {
    state: {
        // 用户的状态。包括用户信息、历史订单、优惠券、消息
        cart: [],
        order: [],
    },
    getters: {

        // 购物车已选商品总金额
        cartCheckedSum(state, getters){
            return getters.cartChecked.items.reduce((accu, curr)=>{
                return accu + curr.amount * curr.price;
            }, 0);
        },

        // 购物车已选商品
        cartChecked(state){
            let indexes = [];
            let items = state.cart.filter((item, index)=>{
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

        // 购物车已选商品总数量
        cartCheckedAmount(state, getters){
            return getters.cartChecked.items.reduce((accu, curr)=>{
                return accu + curr.amount;
            }, 0);
        },
    },
    mutations: {

        // 加载从数据库读取到的用户信息
        loadUser(state, info){
            Object.assign(state, info);
        },

        // 购物车的状态
        // 向购物车里添加一个商品
        addToCart(state, item){
            let bExisted = state.cart.some((val, index)=>{
                // 已有同款商品，直接增加数量
                if (val.id === item.id && val.spec === item.spec){
                    val.amount += item.amount;
                    return true;
                }
            });
            if (!bExisted){
                state.cart.unshift(item);
            }
        },
        // 购物车某商品数量加一
        incrementAmount(state, index){
            state.cart[index].amount++;
        },
        // 购物车某商品数量减一
        decrementAmount(state, index){
            state.cart[index].amount--;
        },
        // 选中或不选某款商品
        switchCheck(state, index){
            state.cart[index].checked
                = !state.cart[index].checked;
        },
        // 删除购物车中的若干项
        deleteCartItems(state, aIndexes){
            // 序号从大到小排序，删除数组项的时候不影响前面的项
            let indexes = aIndexes.sort((m, n)=>{
                return n - m;
            });
            indexes.forEach(item=>{
                state.cart.splice(item, 1);
            });
        },
        // 全选购物车
        seleteAllCartItems(state){
            state.cart.forEach(item=>{
                item.checked = true;
            });
        },
        // 清空购物车
        emptyCart(state){
            state.cart = [];
        },
        // 购物车回滚 用于后端保存失败后的回滚
        cartRollback(state, oCart){
            state.cart = oCart;
        },
        // 支付成功后提交订单
        paid(state, id){
            state.order.some(order=>{
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
            delete order.checked;
            state.order.unshift(order);
            state.cart = state.cart.filter(item=>!item.checked);
        },

        // 取消订单
        cancelOrder(state, id){
            state.order.some(item=>{
                if (item.id === id){
                    item.status = 5;
                    return true;
                }
            });
        },

        // 确认收货
        signFor(state, id){
            state.order.some(item=>{
                if (item.id === id){
                    item.status = 4;
                    return true;
                }
            });
        },

        // 添加新收货地址
        modifyAddrs(state, addrs){
            state.addr = addrs;
        },
    },
};
