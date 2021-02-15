<template>
  <div class="game-load">
    <span class="game-text">LOADING GAME</span>
    <span class="game-load-text">.</span>
    <span class="game-load-text">.</span>
    <span class="game-load-text">.</span>
  </div>
</template>
<script>
  export default {
    name: 'GameLoad'
  }
</script>
<style scoped>
  .background-image {
    background-attachment: unset;
  }
  .game-load {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131212;
    z-index: 9999;
    height: 100%;
    width: 100%;
    position: absolute;
    top: -28%;
    background-attachment: fixed;
  }
  .game-text,
  .game-load-text {
    color: white;
    font-size: 2.2rem;
  }
</style>
