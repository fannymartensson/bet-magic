<template>
  <button @click="RESET_GAME" id="restart">
    Restart
  </button>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'restart',
    methods: { ...mapMutations('c', { RESET_GAME: 'RESET_GAME' }) }
  }
</script>

<style scoped>
  #restart {
    margin-left: 130px;
    height: 20px;
    padding: 0em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    margin-top: 0.9em;
    border-radius: 0;
    background-color: rgb(0, 0, 0);
    border-color: white;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
