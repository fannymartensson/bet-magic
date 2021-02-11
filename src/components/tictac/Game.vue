<template>
  <div class="page-game">
    <Cells
      style="background-color: green; font-size: 46px"
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
              class="btn btn--primary"
              v-if="winner || !hasEmptyCells"
              @click="$store.dispatch('newGame')"
            >
              <span>Play again</span>
              <h2>{{ $store.state.gameHistory }}</h2>
            </button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  import Cells from './Cells'

  export default {
    name: 'Game',
    components: {
      Cells
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
    background-color: rgb(0, 0, 0);
    width: 100%;
    color: whitesmoke;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 400%;
  }
</style>
