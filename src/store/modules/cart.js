
// initial state
// shape: [{ id, quantity }]
const state = {
    list: [], // 购物车列表
    // checkoutStatus: null
};

// getters
const getters = {
    // checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
    // checkout ({ commit, state }, products) {
    //     const savedCartItems = [...state.added]
    //     commit('setCheckoutStatus', null)
    //     // empty cart
    //     commit('setCartItems', { items: [] })
    //     shop.buyProducts(
    //         products,
    //         () => commit('setCheckoutStatus', 'successful'),
    //         () => {
    //             commit('setCheckoutStatus', 'failed')
    //             // rollback to the cart saved before sending the request
    //             commit('setCartItems', { items: savedCartItems })
    //         }
    //     );
    // },
};

// mutations
const mutations = {
    // pushProductToCart (state, { id }) {
    //     state.added.push({
    //         id,
    //         quantity: 1
    //     })
    // },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
