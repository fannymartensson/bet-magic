<template>
  <span>
    <h1 id="playerScore">
      {{ $store.state.playerData.Alias }}
      {{ $store.state.playerData.userScore }}
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
    margin-top: 4vh;
    display: flex;
    justify-content: flex-end;
    align-items: right;
    font-size: 2.5vh;
    padding-right: 4vw;
    color: rgb(255, 255, 255);
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
