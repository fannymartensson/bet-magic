import Vue from 'vue'
import Vuex from 'vuex'
import moduleB from './modules/moduleB'

Vue.use(Vuex)
const emptyPositions = () => [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
]

export default new Vuex.Store({
  modules: {
   b: moduleB
  },
  state: /* HÄR STARTAR TIC TAC */ {

    player: 'X',
    winner: null,
    players: null,
    gameHistory: [],
    positions: emptyPositions(),
    scoreX: 0,
    scoreO: 0,

    /* HÄR SLUTAR TIC TAC */
    currentIndex: 0,
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
        title: 'Space Invadors',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/space-invadors.png',
        routerlink: 'tictac'
      },
      {
        title: 'Donky Kong',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        img: '/donkykong.png',
        routerlink: 'tictac'
      }
    ]
    /* HÄR SLUTAR GAMING CARDSEN */
  },
  getters: {
    /* Här startar tictac*/
    hasPlayers: state => state.players,
    getMarker: state => index => state.positions[index],
    getPlayerName: state => (state.players ? state.players[state.player] : ''),
    getWinnerName: state => (state.winner ? state.players[state.winner] : ''),
    hasEmptyCells: state => {
      return state.positions.filter(position => !!position).length < 9
    },
    hasGoldenWins: state => {
      return state.gameHistory.filter(game => game.isGoldenWin).length > 0
    },
    /* Här slutar tictac */
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
    /* Här startar tictac */
    setPlayers(state, payload) {
      state.players = payload
    },
    changePlayer(state) {
      state.player = state.player === 'X' ? 'O' : 'X'
    },
    pushMarker(state, payload) {
      state.positions = state.positions.map((position, i) => {
        return payload.index === i ? state.player : position
      })
    },
    checkWinning(state, payload) {
      const { positions } = state
      const { player } = payload

      if (
        (positions[0] === player &&
          positions[1] === player &&
          positions[2] === player) ||
        (positions[3] === player &&
          positions[4] === player &&
          positions[5] === player) ||
        (positions[6] === player &&
          positions[7] === player &&
          positions[8] === player) ||
        (positions[0] === player &&
          positions[3] === player &&
          positions[6] === player) ||
        (positions[1] === player &&
          positions[4] === player &&
          positions[7] === player) ||
        (positions[2] === player &&
          positions[5] === player &&
          positions[8] === player) ||
        (positions[0] === player &&
          positions[4] === player &&
          positions[8] === player) ||
        (positions[2] === player &&
          positions[4] === player &&
          positions[6] === player)
      ) {
        state.winner = player
        if (state.winner == 'X') {
          state.scoreX++
        } else {
          state.scoreO++
        }
        console.log(state.players)
        state.gameHistory.push(
          Object.freeze({
            winner: state.winner,
            positions: state.positions,
            winnerName: state.players[state.winner],
            isGoldenWin:
              state.positions.filter(position => !!position).length === 5
          })
        )
      }
    },
    flushPositions(state) {
      state.positions = emptyPositions()
    },
    flushWinner(state) {
      state.winner = null
    },
    /* Här slutar tictac */
    /* HÄR BÖRJAR GAMING CARDSEN */
    nextIndex: state => {
      if (state.currentIndex < state.cards.length - 1) state.currentIndex++
    },
    prevIndex: state => {
      if (state.currentIndex > 0) state.currentIndex--
    }
  },
  /* HÄR SLUTAR GAMING CARDSEN */
  actions: {
    /* Här startar tictac */
    addMarker({ commit }, payload) {
      commit('pushMarker', { ...payload })
      commit('changePlayer')
    },
    newGame({ commit }) {
      commit('flushPositions')
      commit('flushWinner')
    }
    /* Här slutar tictac */

  }
  /* Är det någon som skrivit in detta? =>  > 3 be76e02624a460027ebe33e6091e25432444289 */
})
