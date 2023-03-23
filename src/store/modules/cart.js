import { state as productsState } from './products';

export const namespaced = true;

export const state = {
    cart: [],
    numberProducts: 0,
}

export const actions = {
    ADD_TO_CART({commit}, index,) {
        commit('ADD_TO_CART', index)
        commit('products/ADD_TO_CART', index, {root:true})
    }
}

export const mutations = {
    ADD_TO_CART(state, index,) {
        state.cart.push(productsState.products[index]);
        state.numberProducts++;
    }
}
