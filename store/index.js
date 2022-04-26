import Vue from 'vue'
import Vuex from 'vuex'
import condition from './condition.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 10
  },
  modules: {
    condition
  }
})
