import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      products: [],
      count: 0
    }
  },
  getters: {
  },
  mutations: {
    addItem(state, product) {
      state.cart.products.push(product)
      state.cart.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
