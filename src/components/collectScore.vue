<template>
  <span id="winner">
    <h1>GOOD JOB! You earned 100 points!</h1>
    <button id="myBtn" @click="increaseAndClose">
      Collect Points
    </button>
  </span>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        current: null,
        toNum: null
      }
    },
    methods: {
      ...mapMutations('playerData', {
        increaseScore: 'increaseScore'
      }),
      ...mapActions('d', {
        startNewGame: 'startNewGame'
      }),
      increaseAndClose() {
        if (localStorage.getItem('localScore')) {
          this.current = localStorage.getItem('localScore')
          this.toNum = parseInt(this.current)
        } else {
          this.toNum = 0
        }
        this.toNum += 100
        this.increaseScore(this.toNum)
        this.toNum.toString()
        localStorage.setItem('localScore', this.toNum)
        this.$store.state.playerData.show = false
        this.startNewGame()
      }
    }
  }
</script>

<style>
  #winner {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 1;
    top: 20vh;
    height: 250px;
    width: 250px;
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 5vh;
    cursor: pointer;
    margin-top: 0.9em;
    background-color: black;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
  #myBtn {
    width: 150px;
    height: 70px;
    background-color: gold;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
