<template>
  <span>
    <h1 id="playerScore">
      {{ $store.state.playerName }}: {{ $store.state.playerScore }}
    </h1>
  </span>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style scoped>
  #playerScore {
    display: flex;
    justify-content: flex-end;
    align-items: right;
    font-size: 2.5vh;
    padding-right: 4vw;
    color: rgb(255, 255, 255);
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
