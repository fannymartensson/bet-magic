import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    Alias: null,
    Förnamn: null,
    Efternamn: null,
    Email: null,
    Password: null,
    userScore: null,
    players: true
  },

  mutations: {
    setUser(state, payload) {
      state.Alias = payload.Alias
      state.Förnamn = payload.Förnamn
      state.Efternamn = payload.Efternamn
      state.Email = payload.Email
      state.Password = payload.password
      state.players = false
      state.userScore = 100
    }
  },
  getters: {
    hasPlayers: state => state.players
  }
}
