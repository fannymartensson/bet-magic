<template>
  <div class="game-finish">
    <div class="player-choices">
      WINNER!
      <div>
        <button @click="$emit('play-again')">Play Again</button>
      </div>
      <div>
        <button @click="backHome">Home</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GameFinish',
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
