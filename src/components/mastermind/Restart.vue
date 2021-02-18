<template>
  <button @click="RESET_GAME" class="btn-return">
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
  .btn-return {
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 0.9em;
    background-color: black;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
