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
        <button @click="$emit('play-again')">Try Again</button>
      </div>
      <div>
        <button @click="backHome">Home</button>
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
  button {
    cursor: pointer;
    border: 1px aliceblue solid;
    color: black;
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
    color: white;
  }
</style>
