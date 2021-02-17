import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import moduleC from './modules/moduleD'
import moduleD from './modules/moduleD'

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC,
    d: moduleD
  },
  state: {
    /* här startar PlayerScore data */
    playerName: 'BigSpender',
    playerScore: 100,
    currentIndex: 0,
    /* här slutar PlayerScore data */
    /* HÄR BÖRJAR GAMING CARDSEN */
    cards: [
      {
        title: 'Tic tac toe',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/tictactoe.png',
        routerlink: 'tictac'
      },
      {
        title: 'UFO Shooter',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/space-invadors.png',
        routerlink: 'ufo-shooting'
      },
      {
        title: 'Mastermind',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/mastermind.png',
        routerlink: 'Mastermind'
      },
      {
        title: 'Memory',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/mastermind.png',
        routerlink: 'Memory-card'
      },
      {
        title: 'Snake Game',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/snakegame.png',
        routerlink: 'SnakeGame'
      }
    ]
    /* HÄR SLUTAR GAMING CARDSEN */
  },
  getters: {
    /* HÄR BÖRJAR GAMING CARDSEN */
    currentIndex: state => {
      return state.currentIndex
    },
    cards: state => {
      return state.cards
    }
  },
  /* HÄR SLUTAR GAMING CARDSEN */
  mutations: {
    /* HÄR BÖRJAR GAMING CARDSEN */
    nextIndex: state => {
      if (state.currentIndex < state.cards.length - 1) state.currentIndex++
    },
    prevIndex: state => {
      if (state.currentIndex > 0) state.currentIndex--
    }
  }
  /* HÄR SLUTAR GAMING CARDSEN */
})
