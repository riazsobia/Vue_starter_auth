import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
import product from './modules/product'
import cart from './modules/cart'
import dom from './modules/dom'
import user from './modules/user'



export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        product,
        cart,
        dom,
        user
    }
})