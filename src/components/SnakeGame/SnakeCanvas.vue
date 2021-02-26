<template>
  <div>
    <collectScore v-if="showMe" />
    <canvas
      ref="board"
      id="snake-canvas"
      :width="boardSizePx"
      :height="boardSizePx"
    />
    <constants />
    <h1 class="snake-game">{{ gameover }}</h1>
    <div id="hidden-items">
      <audio ref="audio">
        <source src="../../assets/SnakeGame/eat.wav" type="audio/wav" />
      </audio>
    </div>
    <h1 v-if="snakeHighscore">Higscore: {{ snakeHighscore }}</h1>
    <h1 v-else>Highscore: {{ localHigh }} local</h1>
    <h2>Latest score: {{ latestSnakeScore }}</h2>
  </div>
</template>
<script>
  import collectScore from '../collectScore.vue'
  import Constants from './Constants.vue'
  import Store from '../../store/modules/moduleC.js'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    components: { Constants, collectScore },
    data() {
      return {
        gameover: ''
      }
    },
    name: 'SnakeCanvas',
    props: {
      cellSize: Number,
      boardSize: Number,
      speed: Number,
      isPlaying: Boolean,
      stop: Function
    },
    computed: {
      boardSizePx() {
        return this.cellSize * this.boardSize
      },
      ...mapGetters('playerData', {
        showMe: 'showMe',
        snakeHighscore: 'snakeHighscore',
        latestSnakeScore: 'latestSnakeScore',
        latestHigh: 'latestHigh'
      })
    },
    mounted() {
      this.boardContext = this.$refs.board.getContext('2d')
      window.addEventListener('keydown', this.onKeyPress)
    },
    created() {
      this.resetSnake()
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.onKeyPress)
    },
    watch: {
      isPlaying(value) {
        this.clear()
        if (value) {
          this.resetSnake()
          this.move()
        }
      }
    },
    methods: {
      // To make the snake move in directions
      resetSnake() {
        this.gameover = ''
        this.snake = [
          {
            x: this.getMiddleCell(),
            y: this.getMiddleCell()
          }
        ]
        const randomDirectionIndex = Math.floor(Math.random() * 4)
        this.direction = Constants[randomDirectionIndex]
        this.targetCell = null
      },
      getMiddleCell() {
        return Math.round(this.boardSize / 2)
      },
      // To add and reset scores
      addScores() {
        Store.commit('increment')
      },
      resetScores() {
        Store.commit('reset')
      },
      ...mapMutations('playerData', {
        newSnakeScore: 'newSnakeScore'
      }),
      // To make the snake move

      move() {
        if (!this.isPlaying) {
          return
        }

        this.clear()
        this.setTargetCell()
        // level1
        if (Store.state.score === 5) {
          this.drawCell({ x: 1, y: 2, color: 'orange' })
        }
        // level2
        if (Store.state.score === 10) {
          this.drawCell({ x: 9, y: 7, color: 'pink' })
          this.drawCell({ x: 3, y: 4, color: 'yellow' })
        }
        // To create newhead and also direction

        const newHeadCell = {
          x: this.snake[0].x + this.direction.move.x,
          y: this.snake[0].y + this.direction.move.y
        }

        if (
          this.isCellOutOfBoard(newHeadCell) ||
          this.amountCellsInSnake(this.snake[0]) > 1
        ) {
          this.stop()
          this.gameover = 'Game over!'
          if (Store.state.score > 2) {
            this.$store.state.playerData.show = true
            this.newSnakeScore(Store.state.score)
            console.log(this.localHighscore)
          }
          this.resetScores()
        }
        // To make snake eat the food and make it long
        if (this.isTargetNewHead()) {
          this.snake.unshift(this.targetCell)
          // To play the sound while eating food
          this.$refs.audio.play()
          this.targetCell = null
          this.addScores()
        } else {
          this.snake.unshift(newHeadCell)
          this.snake.pop()
        }

        this.boardContext.beginPath()
        this.snake.forEach(this.drawCell)
        this.boardContext.closePath()

        setTimeout(this.move, this.getMoveDelay())
      },
      clear() {
        this.boardContext.clearRect(0, 0, this.boardSizePx, this.boardSizePx)
      },
      // to build the white blocks or snake body
      drawCell({ x, y, color }) {
        this.boardContext.rect(
          x * this.cellSize,
          y * this.cellSize,
          this.cellSize,
          this.cellSize
        )
        this.boardContext.fillStyle = color
        this.boardContext.fill()
      },
      getMoveDelay() {
        return (2 / Number(this.speed)) * 1000
      },
      isCellOutOfBoard({ x, y }) {
        return x < 0 || y < 0 || x >= this.boardSize || y >= this.boardSize
      },
      onKeyPress(event) {
        const newDirection = Constants.find(c => c.keyCode === event.keyCode)

        if (!newDirection) {
          return
        }

        if (Math.abs(newDirection.keyCode - this.direction.keyCode) !== 2) {
          this.direction = newDirection
        }
      },
      // to create the food
      setTargetCell() {
        if (!this.targetCell) {
          let targetCell = this.getRandomCell()
          while (this.amountCellsInSnake(targetCell) > 0) {
            targetCell = this.getRandomCell
          }
          this.targetCell = targetCell
        }

        this.boardContext.beginPath()
        this.boardContext.rect(
          this.targetCell.x * this.cellSize,
          this.targetCell.y * this.cellSize,
          this.cellSize,
          this.cellSize
        )
        this.boardContext.fillStyle = 'red'
        this.boardContext.fill()
        this.boardContext.closePath()
      },
      // to make the food come randomly
      getRandomCell() {
        return {
          x: Math.floor(Math.random() * this.boardSize),
          y: Math.floor(Math.random() * this.boardSize)
        }
      },
      amountCellsInSnake(cell) {
        return this.snake.filter(({ x, y }) => x === cell.x && y === cell.y)
          .length
      },
      isTargetNewHead() {
        return (
          this.snake[0].x + this.direction.move.x === this.targetCell.x &&
          this.snake[0].y + this.direction.move.y === this.targetCell.y
        )
      }
    }
  }
</script>
<style scoped>
  h1 {
    font-size: 20px;
  }
  #snake-canvas {
    border: 10px solid rgb(81, 57, 136);
    height: 320px;
    width: 320px;
    margin: 30px 0;
  }
  @media screen and (min-width: 800px) and (max-width: 999px) {
    #snake-canvas {
      height: 500px;
      width: 500px;
    }
  }
  @media (min-width: 1000px) {
    #snake-canvas {
      height: 500px;
      width: 500px;
    }
  }
</style>
