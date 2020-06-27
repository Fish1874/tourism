import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) // 使用组件要Vue.use()

export default new Vuex.Store({
  state,
  mutations: mutations
})
