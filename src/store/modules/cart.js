import { state as productsState } from './products';
import { mutations as productsMutations } from "./products";

export const namespaced = true;

export const state = {
    cart: [],
    numberProducts: 0,
}

export const mutations = {
    ADD_TO_CART(state, index) {
        state.cart.push(productsState.products[index]);
        state.numberProducts++;
    }
}
