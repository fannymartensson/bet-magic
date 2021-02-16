<template>
  <div>
    <canvas
      ref="board"
      id="snake-canvas"
      :width="boardSizePx"
      :height="boardSizePx"
    />
    <constants />
     <h1>{{gameover}}</h1>
  </div>
</template>
<script>
  import Constants from './Constants.vue'
  import Store from '../../store/modules/moduleC.js'

  export default {
    components: { Constants },
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
      }
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

      addScores() {
        Store.commit('increment')
      },
      resetScores() {
        Store.commit('reset')
      },

      move() {
        if (!this.isPlaying) {
          return
        }

        this.clear()
        this.setTargetCell()

        const newHeadCell = {
          x: this.snake[0].x + this.direction.move.x,
          y: this.snake[0].y + this.direction.move.y
        }

        if (
          this.isCellOutOfBoard(newHeadCell) ||
          this.amountCellsInSnake(this.snake[0]) > 1
        ) {
          this.stop()
          this.gameover = `Game over! You've scored ${Store.state.score} points`
          this.resetScores()
        }

        if (this.isTargetNewHead()) {
          this.snake.unshift(this.targetCell)
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
      drawCell({ x, y }) {
        this.boardContext.rect(
          x * this.cellSize,
          y * this.cellSize,
          this.cellSize,
          this.cellSize
        )
        this.boardContext.fillStyle = 'white'
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

@media only screen 
  and (min-device-width: 375px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    h1 {
      font-size: 20px
    }
#snake-canvas {
    border: 10px solid rgb(81, 57, 136);
    height: 50vh;
    margin: 30px 0;
  }
}

@media screen 
  and (min-device-width: 800px) {
#snake-canvas {
    border: 10px solid rgb(81, 57, 136);
    height: 60vh;
    margin: 30px 0;
  }
}
</style>
