import axios from 'axios'

export default  {
  namespaced: true,
  state: {
    cardsList: [],
    cardNumOne: null,
    cardNumTwo: null,
    status: 'SUIT',
    gameLoadStatus: false
  },
  getters: {
    getCards(state) {
      return state.cardsList
    },
    getCardNumOne(state) {
      return state.cardNumOne
    },
    getCardNumTwo(state) {
      return state.cardNumTwo
    },
    getGameLoadStatus(state) {
      return state.gameLoadStatus
    },
    getStatus(state) {
      return state.status
    },
    getUnMatchedCards(state) {
      return (
        state.cardsList &&
        state.cardsList.filter(card => card.isMatched === false)
      )
    }
  },
  mutations: {
    UPDATE_CARDS: (state, cardsList) => {
      state.cardsList = cardsList
    },
    UPDATE_CARD_NUM_ONE(state, payload) {
      state.cardNumOne = payload
    },
    UPDATE_CARD_NUM_TWO(state, payload) {
      state.cardNumTwo = payload
    },
    UPDATE_STATUS(state, payload) {
      state.status = payload
    },
    UPDATE_GAME_LOAD(state, payload) {
      state.gameLoadStatus = payload
    }
  },
  actions: {
    checkCards({ commit, getters, state }) {
      const { cardsList, cardNumOne, cardNumTwo } = state

      commit('UPDATE_STATUS', 'COMPARE')

      if (cardNumOne.name === cardNumTwo.name) {
        // Update cards
        const copy = [...cardsList]
        const firstIndex = cardsList.findIndex(
          card => card.id === cardNumOne.id
        )
        const secondIndex = cardsList.findIndex(
          card => card.id === cardNumTwo.id
        )
        copy[firstIndex].isMatched = true
        copy[secondIndex].isMatched = true
        commit('UPDATE_CARDS', copy)
      }
      // Reset selected cards
      commit('UPDATE_CARD_NUM_ONE', null)
      commit('UPDATE_CARD_NUM_TWO', null)
      if (getters.getUnMatchedCards && getters.getUnMatchedCards.length === 0) {
        commit('UPDATE_STATUS', 'WON')
      } else {
        commit('UPDATE_STATUS', 'SUIT')
      } // TO SEE THE GAME FINISH
    },
    setDeck(context) {
      //TO SHUFFLE WE NEED THE PROMISE
      return new Promise((resolve, reject) => {
        context.commit('UPDATE_GAME_LOAD', true)
        axios
          .get('data.json')
          .then(res => {
            context.commit('UPDATE_CARDS', res.data)
            resolve(res.data)
          })
          .catch(err => {
            return reject(err)
          })
      })
    },
    showCard({ commit, dispatch, state }, card) {
      if (state.cardNumOne && state.cardNumTwo) {
        return
      }
      if (!state.cardNumOne) {
        commit('UPDATE_CARD_NUM_ONE', card)
      } else if (state.cardNumOne && !state.cardNumTwo) {
        if (state.cardNumOne.id === card.id) {
          return
        }
        commit('UPDATE_CARD_NUM_TWO', card)
        setTimeout(() => {
          dispatch('checkCards')
        }, 600)
      }
    },
    shuffleCards({ commit, state }) {
      // WE USE THE PROMISE TO SEE THE 24 CARDS
      return new Promise((resolve, reject) => {
        if (!state.cardsList) {
          reject()
          return
        }
        const copyCards = [...state.cardsList]
        copyCards.sort(() => Math.random() - 0.5)
        commit('UPDATE_CARDS', copyCards)
        resolve(copyCards)
      })
    },

    async updateDeck({ dispatch, commit }) {
      await dispatch('setDeck')
      await dispatch('shuffleCards')
      commit('UPDATE_STATUS', 'SUIT') //THIS COMMIT IS FOR RESTATING THE GAME
      setTimeout(() => {
        commit('UPDATE_GAME_LOAD', false)
      },1600)
    }
  }
}
