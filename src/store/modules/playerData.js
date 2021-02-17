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
    userScore: 99,
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
    }
  },
  getters: {
    hasPlayers: state => state.players
  }
}
