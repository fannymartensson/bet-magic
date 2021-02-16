<template>
  <div id="app">
    <header>
      <logo-icon class="logo-btn" :LogoIcon="true" />
      <menu-btn class="menu-btn" :MenuBtn="true" />
    </header>
    <h1>Snake Game</h1>
    <div class="column">
      Clarity
      <input type="number" min="25" v-model.number="cellSize" />
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
    <p>Total: </p>
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

    data () {
      return {
        cellSize: 25,
        boardSize: 20,
        speed: 10,
        isPlaying: false
      }
    },

    computed: {
      score () {
        return Store.state.score
      }
    },

    methods: {
      start () {
        this.isPlaying = true
      },
      stop () {
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background: transparent;
  }
  .column {
    display: inline-block;
    width: 20%;
    padding: 5px;
    margin: 5px;
    color: white;
  }
  .column input {
    width: 30px;
    border: none;
    background: transparent;
    line-height: 20px;
    color: white;
    font-size: 17px;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }

  #play-btn {
    padding: 10px 20px;
    border: 1px solid #222;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 0.9em;
    background-color: black;
    border-color: white;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
