import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    cards: [
      {
        title: 'Space Invadors',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/space-invadors.png'
      },
      {
        title: 'Pac Man',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/pacman.png'
      },
      {
        title: 'Donky Kong',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/donkykong.png'
      }
    ]
  },
  getters: {
    currentIndex: state => {
      return state.currentIndex
    },
    cards: state => {
      return state.cards
    }
  },
  mutations: {
    nextIndex: state => {
      if (state.currentIndex < state.cards.length - 1) state.currentIndex++
    },
    prevIndex: state => {
      if (state.currentIndex > 0) state.currentIndex--
    }
  },
  actions: {},
  modules: {}
})
