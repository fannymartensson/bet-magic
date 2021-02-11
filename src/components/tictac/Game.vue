<template>
  <div class="page-game">
    <Return />
    <h1>TIC-TAC-VUE</h1>
    <Cells
      style="background-color: green; font-size: 70px"
      :positions="positions"
    />
    <div class="row">
      <div class="col">
        <h3 class="footer__player">
          <span v-if="winner">
            <strong>{{ getWinnerName }}</strong> wins!
          </span>
          <span v-else-if="!winner && hasEmptyCells"
            >{{ getPlayerName }} plays!</span
          >
          <span v-else>Draw!</span>
        </h3>
      </div>
      <div class="col">
        <div class="text--right">
          <transition name="bounce">
            <button
              class="playAgain"
              v-if="winner || !hasEmptyCells"
              @click="$store.dispatch('newGame')"
            >
              <span>Play again</span>
            </button>
          </transition>
        </div>
      </div>
      <div class="playerScore">
        <h2>{{ $store.state.players.O }}: {{ $store.state.scoreO }}</h2>
        <h2>{{ $store.state.players.X }}: {{ $store.state.scoreX }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  import Cells from './Cells'
  import Return from '../return.vue'

  export default {
    name: 'Game',
    components: {
      Cells,
      Return
    },

    computed: {
      ...mapState(['player', 'winner', 'positions']),

      ...mapGetters(['getPlayerName', 'getWinnerName', 'hasEmptyCells'])
    },

    beforeCreate() {
      document.title = 'Game'
    }
  }
</script>

<style scoped>
  .page-game {
    background-image: '../assets/Background.svg';
    width: 100%;
    color: whitesmoke;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 400%;
  }
  .playerScore {
    margin-top: 30px;
  }
  .playAgain {
    background-color: rgb(110, 40, 175);
    color: rgb(238, 238, 238);
    font-weight: bold;
    padding: 10%;
    border-radius: 8%;
  }
</style>
