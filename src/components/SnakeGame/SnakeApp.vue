<template>
  <div id="snake-canvas">
    <section class="header">
      <!-- <p class="snake-game">Level: {{ score }}</p> -->
      <!-- <p class="snake-game">Highest Score: {{ highestScore }}</p> -->
    </section>
    <snake-canvas
      :cellSize="cellSize"
      :boardSize="boardSize"
      :isPlaying="isPlaying"
      :stop="stop"
    />
    <div class="text">
      <p>Score: {{ score }}</p>
      <div class="column">
        Zoom
        <input type="number" min="10" v-model.number="boardSize" />
      </div>
    </div>
    <div class="container">
      <p class="row">
        <button class="action-buttons">
          <button @click="handleClick('top')" id="U" />
          <button @click="handleClick('right')" id="R" />
          <button @click="handleClick('bottom')" id="D" />
          <button @click="handleClick('left')" id="L" />
          <button id="play-btn" @click="isPlaying ? stop() : start()">
            {{ isPlaying ? '◼' : '▶' }}
          </button>
          <button @click="handleClick('bottom')" id="D" />
        </button>
      </p>
    </div>

    <!-- <input type="number" min="1" v-model.number="speed" /> -->
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
        isPlaying: false
        // highestScore: ''
      }
    },
    computed: {
      score() {
        return Store.state.score
      },
      speed() {
        return Store.state.getters.speed
      }
    },
    // created() {
    //   if (localStorage.score) {
    //     localStorage.setItem('highestScore', this.score)
    //     this.score = localStorage.getItem('score')
    //   }
    // },
    // watch: {
    //   score(highestScore) {
    //     localStorage.score = highestScore
    //   }
    // },

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
<style scoped lang="scss">
  @import '@/assets/scss/global.scss';
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: transparent;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #snake-canvas {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
  }

  .text {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: baseline;
    position: absolute;
    left: 50%;
    top: 61%;
    cursor: pointer;
    @media only screen and (min-width: 767px) {
      left: 55%;
      top: 15%;
    }
  }

  .column {
    display: inline-block;
    width: 20%;
    padding: 5px 20px;
    margin: 5px;
    color: white;
    display: flex;
    flex-direction: flex-start;
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
    font-size: 20px;
    cursor: pointer;
    margin-top: 0.9em;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    display: inline-block;
    background: rgb(28, 4, 71);
    cursor: pointer;
    border-radius: 90%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    border-radius: 20%;
    margin-top: 45%;
    border: 2px solid grey;
  }

  #play-btn:before {
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 60%;
    background: rgb(28, 4, 71);
    cursor: pointer;
  }

  #play-btn:hover {
    background-color: white;
    color: black;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .action-buttons {
    width: 180px;
    height: 180px;
    border-radius: 90%;
    border: none;
    background: transparent;
    position: relative;
  }

  #R {
    top: 54%;
    right: -10px;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20%;
    background: rgb(28, 4, 71);
    cursor: pointer;
  }

  #R:hover {
    background-color: white;
    color: black;
  }

  #R:before {
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 60%;
    background: rgb(28, 4, 71);
    cursor: pointer;
  }

  #D {
    bottom: -17px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20%;
    background: rgb(28, 4, 71);
    cursor: pointer;
  }

  #D:hover {
    background-color: white;
    color: black;
  }

  #L {
    top: 54%;
    left: -12px;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20%;
    background: rgb(28, 4, 71);
    cursor: pointer;
  }

  #L:hover {
    background-color: white;
    color: black;
  }

  #U {
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20%;
    background: rgb(28, 4, 71);
    cursor: pointer;
  }

  #U:hover {
    background-color: white;
    color: black;
  }
</style>
