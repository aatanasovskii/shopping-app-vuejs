import Vue from 'vue'
import Vuex from 'vuex'
import * as products from "@/store/modules/products"
import * as categories from "@/store/modules/categories"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    categories,
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
