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
    userScore: localStorage.getItem('localScore'),
    players: true,
    Mastermind: 0,
    signedUp: false,
    show: false
  },

  mutations: {
    setUser(state, payload) {
      state.Alias = payload.Alias
      state.Förnamn = payload.Förnamn
      state.Efternamn = payload.Efternamn
      state.Email = payload.Email
      state.Password = payload.password
      state.players = false
      state.signedUp = true
      localStorage.setItem('Alias', payload.Alias)
      localStorage.setItem('Förnamn', payload.Förnamn)
      localStorage.setItem('Efternamn', payload.Efternamn)
      localStorage.setItem('Email', payload.Email)
      localStorage.setItem('Password', payload.Password)
      localStorage.setItem('localScore', '1000')
      localStorage.setItem('Registered', 'true')
    },
    increaseScore(state, payload) {
      state.userScore = localStorage.setItem('localScore', payload)
      this.show = false
    }
  },
  getters: {
    hasPlayers: state => state.players,
    showMe: state => state.show
  }
}
