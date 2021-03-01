<template>
  <div class="game-finish" v-if="status">
    <div class="player-choices">
      <span class="fail" v-if="status === 'GAMEOVER'">
        GAME OVER!
      </span>
      <span class="win" v-else-if="status === 'WINNER'">
        winner!
      </span>
      <div class="finish-btns">
        <button class="play-again" @click="$emit('play-again')">
          play Again
        </button>
        <button class="back-home" @click="$emit('back-home')">Home</button>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'GameFinish',
    computed: {
      ...mapGetters('b', {
        status: 'getStatus'
      })
    }
  }
</script>
<style scoped>
  .player-choices,
  .game-finish {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .game-finish {
    background: transparent;
    width: 100vw;
    height: 63vh;
    z-index: 3;
  }
  .finish-btns {
    padding: 2rem;
  }
  .play-again,
  .back-home {
    cursor: pointer;
    margin: 20px;
    border-radius: 4px;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
  .play-again:hover,
  .back-home:hover {
    background: #fff;
    color: #000;
  }

  .play-again {
    padding: 0.9rem 2.2rem;
    font-size: 1.4rem;
  }
  .back-home {
    padding: 0.7rem 3.6rem;
    font-size: 1.7rem;
  }

  .win,
  .fail {
    font-size: 7rem;
  }
  .fail {
    color: red;
    margin-left: 30px;
    font-size: 8rem;
  }
  .win {
    color: white;
    margin-left: 3rem;
  }
</style>
