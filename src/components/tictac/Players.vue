<template>
  <div class="players">
    <h1>Skriv in spelarnamn</h1>
    <div class="player">
      <input
        v-model="playerX"
        class="form__input"
        id="player-x"
        type="text"
        placeholder="Spelare X"
      />
    </div>
    <div class="player">
      <input
        v-model="playerO"
        class="form__input"
        id="player-o"
        type="text"
        placeholder="Spelare O"
      />
    </div>
    <div class="next text--center">
      <button
        :disabled="!hasPlayers"
        class="btn btn--secondary"
        @click="start({ O: playerO, X: playerX })"
      >
        {{ buttonValue }}
      </button>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Players',

    data() {
      return {
        playerO: '',
        playerX: ''
      }
    },

    computed: {
      hasPlayers() {
        return this.playerO && this.playerX
      },

      buttonValue() {
        return this.hasPlayers ? 'Play' : 'Fill out the form'
      }
    },

    methods: {
      ...mapMutations(['setPlayers']),

      start(players) {
        this.setPlayers(players)
        this.$forceUpdate()
      }
    },

    mounted() {
      document.title = 'Players'
    }
  }
</script>

<style scoped>
  .players {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
    background-color: black;
    color: rgb(170, 170, 170);
    height: 60vh;
    border: solid 2px rgb(170, 170, 170);
    padding: 3%;
  }
</style>
