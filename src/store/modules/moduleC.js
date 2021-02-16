import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0
  },
  // getters: {
  //   speed: state => Math.ceil(state.score / 20) || 1
  // },
  mutations: {
    increment: state => state.score++,
    reset: state => (state.score = 0)
  },
  actions: {},
  modules: {}
})
