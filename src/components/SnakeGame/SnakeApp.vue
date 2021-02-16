<template>
  <div id="app">
    <header>
      <logo-icon class="logo-btn" :LogoIcon="true" />
      <menu-btn class="menu-btn" :MenuBtn="true" />
    </header>
    <h1>Snake Game</h1>
    <div class="column">
      Clarity
      <input type="number" min="10" v-model.number="cellSize" />
    </div>
    <div class="column">
      Size
      <input type="number" min="5" v-model.number="boardSize" />
    </div>
    <div class="column">
      Speed
      <input type="number" min="1" v-model.number="speed" />
    </div>
    <snake-canvas
      :cellSize="cellSize"
      :boardSize="boardSize"
      :speed="speed"
      :isPlaying="isPlaying"
      :stop="stop"
    />
    <p>Score: {{ score }}</p>
    <button id="play-btn" @click="isPlaying ? stop() : start()">
      {{ isPlaying ? 'Stop' : 'Play' }}
    </button>
  </div>
</template>
<script>
  import SnakeCanvas from './SnakeCanvas.vue'
  import Store from '../../store/modules/moduleC.js'
  import MenuBtn from '@/components/MenuBtn.vue'
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    name: 'SnakeApp',
    components: {
      SnakeCanvas,
      MenuBtn,
      LogoIcon
    },

    data() {
      return {
        cellSize: 10,
        boardSize: 20,
        speed: 10,
        isPlaying: false
      }
    },

    computed: {
      score() {
        return Store.state.score
      }
    },

    methods: {
      start() {
        this.isPlaying = true
      },
      stop() {
        this.isPlaying = false
      }
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: transparent;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: transparent;
  }
  .column {
    display: inline-block;
    width: 20%;
    border-radius: 4px;
    padding: 5px;
    margin: 5px;
    background-color: aliceblue;
  }
  .column input {
    width: 30px;
    border-radius: 40px;
    border: 1px solid white;
    line-height: 20px;
  }

  #play-btn {
    padding: 10px 20px;
    border: 1px solid #222;
    border-radius: 4px;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>
