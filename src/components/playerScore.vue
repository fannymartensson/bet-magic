<template>
  <span v-if="Registered">
    <!-- IF spelaren är inloggad så visas denna komponent nere i höger hörn på vår apps alla sidor. -->
    <h1 id="playerScore">
      {{ localAlias }}
      {{ localScore }}
    </h1>
  </span>
</template>

<script>
  export default {
    created() {
      setInterval(() => {
        this.localAlias = localStorage.getItem('Alias')
        this.localScore = localStorage.getItem('localScore')
        this.Registered = localStorage.getItem('Registered')
        this.$forceUpdate() // Då komponenten skapas hämtar den data från Localstorage, och för att bli något sånär responsiv så uppdateras den varje sekund och kollar i lokalstorage igen.
      }, 1000)
    },
    data() {
      return {
        localAlias: localStorage.getItem('Alias'),
        localScore: localStorage.getItem('localScore'),
        Registered: localStorage.getItem('Registered')
      }
    }
  }
</script>

<style scoped>
  #playerScore {
    margin-left: 75vw;
    position: fixed;
    bottom: 10px;
    font-size: 2.5vh;
    color: rgb(255, 255, 255);
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
