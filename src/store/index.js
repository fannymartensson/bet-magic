import Vue from 'vue'
import Vuex from 'vuex'
import moduleB from './modules/moduleB'

import {
  TOTAL,
  INIT_TURN,
  INIT_SECRET,
  INIT_FEEDBACK,
  COLORS
} from './settings'

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

/* Här startar Mastermind */

/* Här slutar Mastermind */

export default new Vuex.Store({
  modules: {
    b: moduleB
  },
  state: {
    /* Här startar Mastermind */
    total: TOTAL,
    current: 1,
    currentTurn: INIT_TURN,
    secret: INIT_SECRET,
    colors: COLORS,
    won: false,
    lost: false,
    forceReset: false,
    feedback: INIT_FEEDBACK,
    /* Här slutar Mastermind */

    /* HÄR STARTAR TIC TAC */
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
        routerlink: 'space-invaders'
      },
      {
        title: 'Mastermind',
        description:
          'Gissa den hemliga färgkombinationen. Endast en färg får användas en gång, vid rätt färg på rätt plats markeras svart, vid rätt färg på fel plats markeras rött.',
        img: '/mastermind.png',
        routerlink: 'Mastermind'
      }
    ]
    /* HÄR SLUTAR GAMING CARDSEN */
  },
  getters: {
    /* Här startar Mastermind */

    checkButtonTranslation(state) {
      const y = (state.current - 1) * 100
      const offset = y / 10 // this works because $aria is 10px in the sass
      return `translate(100%, calc(-${y}% - ${offset}px))`
    },
    isActive: state => x => x < state.current,
    isCurrentTurnValid(state) {
      const missing = state.currentTurn.filter(x => x === -1)
      if (missing.length > 0) return false

      return state.currentTurn.length === new Set(state.currentTurn).size
    },
    /* Här slutar mastermind */

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
    /* Här startar Mastermind */

    GENERATE_SECRET(state) {
      let s = new Set()
      while (s.size !== 4)
        s.add(Math.round(Math.random() * (state.colors.length - 1)))
      state.secret = [...s]
    },
    RESET_TURN(state) {
      state.won = false
      state.lost = false
      state.currentTurn = [-1, -1, -1, -1]
    },
    INCREMENT_TURN(state) {
      state.current++
    },
    UPDATE_CURRENT_TURN(state, payload) {
      state.currentTurn.splice(payload.index, 1, payload.colorIndex)
    },
    WON(state) {
      state.won = true
    },
    LOST(state) {
      state.lost = true
    },
    RESET_GAME(state) {
      state.total = TOTAL
      state.current = 1
      state.currentTurn = INIT_TURN
      state.secret = INIT_SECRET
      state.won = false
      state.lost = false
      state.feedback = Array.from(' '.repeat(TOTAL))
      state.forceReset = !state.forceReset
    },
    FEEDBACK(state) {
      let fb = ''

      for (let i = 0; i < state.currentTurn.length; i++) {
        const found = state.secret.findIndex(x => x === state.currentTurn[i])
        if (found === -1) continue
        fb += found === i ? '1' : '0'
      }

      state.feedback[state.current] = fb
    },
    /* Här slutar Mastermind */

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
    /* Här startar Mastermind */

    generateSecret: context => {
      context.commit('GENERATE_SECRET')
    },
    checkTurn: context => {
      const win = context.state.currentTurn.findIndex((x, i) => {
        return x !== context.state.secret[i]
      })

      context.commit('FEEDBACK')
      context.commit('RESET_TURN')

      if (win === -1) {
        context.commit('WON')
        return
      }

      if (context.state.current === context.state.total) {
        context.commit('LOST')
        return
      }

      context.commit('INCREMENT_TURN')
    },
    updateCurrentTurn: (context, payload) => {
      context.commit('UPDATE_CURRENT_TURN', payload)
    },
    startNewGame: context => {
      context.commit('RESET_GAME')
      context.commit('GENERATE_SECRET')
    },
    getFeedback: context => {
      context.commit('FEEDBACK')
    },
    /* Här slutar Mastermind */

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
