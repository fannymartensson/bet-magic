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
    show: false,
    latestSnakeScore: '',
    snakeHighscore: null,
    Registered: false
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
      localStorage.setItem('SnakeHighscore', '1')
    },
    increaseScore(state, payload) {
      state.userScore = localStorage.setItem('localScore', payload)
      this.show = false
    },
    newSnakeScore(state, x) {
      console.log(x)
      if (x > parseInt(localStorage.getItem('SnakeHighscore'))) {
        localStorage.setItem('SnakeHighscore', x)
        state.snakeHighscore = x
      }
      state.latestSnakeScore = x
    }
  },
  getters: {
    hasPlayers: state => state.players,
    showMe: state => state.show,
    snakeHighscore: state => state.snakeHighscore,
    latestSnakeScore: state => state.latestSnakeScore,
    signedUp: state => state.signedUp,
    speed: state => Math.ceil(state.score / 5) || 15
  }
}
