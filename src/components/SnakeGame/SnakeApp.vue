<template>
  <div id="snake-canvas">
    <snake-canvas
      :cellSize="cellSize"
      :boardSize="boardSize"
      :isPlaying="isPlaying"
    />
  </div>
</template>
<script>
  import SnakeCanvas from './SnakeCanvas.vue'
  // import Store from '../../store/modules/moduleC.js'

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
      }
    },
    computed: {},
    methods: {}
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
    display: flex;
    flex-direction: flex-start;
  }
  .column input {
    margin-left: 2px;
    width: 38px;
    border: none;
    background: transparent;
    line-height: 20px;
    font-size: 17px;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }

  // #play-btn {
  //   color: white;
  //   font-size: 20px;
  //   cursor: pointer;
  //   margin-top: 0.9em;
  //   font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  //   display: inline-block;
  //   background: rgb(28, 4, 71);
  //   cursor: pointer;
  //   border-radius: 90%;
  //   transform: translateY(-50%);
  //   width: 60px;
  //   height: 60px;
  //   border-radius: 20%;
  //   margin-top: 45%;
  //   border: 2px solid grey;
  // }

  // #play-btn:before {
  //   width: 35px;
  //   height: 35px;
  //   display: inline-block;
  //   border-radius: 40px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: absolute;
  //   border-radius: 60%;
  //   background: rgb(28, 4, 71);
  //   cursor: pointer;
  // }

  // #play-btn:hover {
  //   background-color: white;
  //   color: black;
  // }

  // .container {
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
  // }

  // .row {
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;
  // }

  // .action-buttons {
  //   width: 180px;
  //   height: 180px;
  //   border-radius: 90%;
  //   border: none;
  //   background: transparent;
  //   position: relative;
  // }

  // #R {
  //   top: 54%;
  //   right: -10px;
  //   transform: translateY(-50%);
  //   width: 60px;
  //   height: 60px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: absolute;
  //   border-radius: 20%;
  //   background: rgb(28, 4, 71);
  //   cursor: pointer;
  // }

  // #R:hover {
  //   background-color: white;
  //   color: black;
  // }

  // #R:before {
  //   width: 35px;
  //   height: 35px;
  //   display: inline-block;
  //   border-radius: 40px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: absolute;
  //   border-radius: 60%;
  //   background: rgb(28, 4, 71);
  //   cursor: pointer;
  // }

  // #D {
  //   bottom: -17px;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 60px;
  //   height: 60px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: absolute;
  //   border-radius: 20%;
  //   background: rgb(28, 4, 71);
  //   cursor: pointer;
  // }

  // #D:hover {
  //   background-color: white;
  //   color: black;
  // }

  // #L {
  //   top: 54%;
  //   left: -12px;
  //   transform: translateY(-50%);
  //   width: 60px;
  //   height: 60px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: absolute;
  //   border-radius: 20%;
  //   background: rgb(28, 4, 71);
  //   cursor: pointer;
  // }

  // #L:hover {
  //   background-color: white;
  //   color: black;
  // }

  // #U {
  //   top: 5px;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 60px;
  //   height: 60px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: absolute;
  //   border-radius: 20%;
  //   background: rgb(28, 4, 71);
  //   cursor: pointer;
  // }

  // #U:hover {
  //   background-color: white;
  //   color: black;
  // }
</style>
