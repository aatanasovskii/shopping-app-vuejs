import Vue from 'vue'
import Vuex from 'vuex'
import * as products from "@/store/modules/products"
import * as categories from "@/store/modules/categories"
import * as cart from "@/store/modules/cart"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    categories,
    cart,
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
