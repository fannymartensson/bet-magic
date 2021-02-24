<template>
  <div class="game-finish" v-if="status">
    <div class="player-choices">
      <span v-if="status === 'GAMEOVER'">
        GAME OVER!
      </span>
      <span v-else-if="status === 'WINNER'">
        winner!
      </span>
      <div>
        <button class="play-again" @click="$emit('play-again')">
          play Again
        </button>
      </div>
      <div>
        <button class="back-home" @click="backHome">Home</button>
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
    },
    methods: {
      backHome() {
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
  .play-again,
  .back-home {
    cursor: pointer;
    border: 1px aliceblue solid;
    color: rgb(253, 250, 250);
  }
  .game-finish {
    background: transparent;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -121px;
  }
</style>
