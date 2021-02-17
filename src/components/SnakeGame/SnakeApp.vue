<template>
  <div id="snake-canvas">
    <snake-canvas
      :cellSize="cellSize"
      :boardSize="boardSize"
      :speed="speed"
      :isPlaying="isPlaying"
      :stop="stop"
    />
    <p>Points: {{ score }}</p>
    <p>Score: 88</p>

    <button id="play-btn" @click="isPlaying ? stop() : start()">
      {{ isPlaying ? 'Stop' : 'Play' }}
    </button>
    <section class="settings">
      <div class="column">
        <p number="cellSize" />
      </div>
      <div class="column">
        Zoom
        <input type="number" min="10" v-model.number="boardSize" />
      </div>
      <div class="column">
        Speed
        <input type="number" min="1" v-model.number="speed" />
      </div>
    </section>
  </div>
</template>
<script>
  import SnakeCanvas from './SnakeCanvas.vue'
  import Store from '../../store/modules/moduleC.js'

  export default {
    name: 'SnakeApp',
    components: {
      SnakeCanvas
    },

    data() {
      return {
        cellSize: 25,
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
  #snake-canvas {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background: transparent;
  }

  .settings {
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    width: 200px;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 0.9em;
    background-color: black;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    margin-top: 5em;
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
