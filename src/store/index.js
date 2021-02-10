import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentIndex: 0,
        cards: [{
                title: 'Game 1',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                img: '/gameCard.jpg'
            },
            {
                title: 'Game 2',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                img: '/gameCard.jpg'
            },
            {
                title: 'Game 3',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                img: '/gameCard.jpg'
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