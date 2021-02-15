<template>
  <div class="game-load">
    <span class="game-text">LOADING GAME</span>
    <span class="game-load">.</span>
    <span class="game-load">.</span>
    <span class="game-load">.</span>
  </div>
</template>
<script>
  export default {
    name: 'GameLoad'
  }
</script>
<style lang="scss" scoped>
  .game-load {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    z-index: 9999;
    height: 100%;
    width: 100%;
  }
</style>
