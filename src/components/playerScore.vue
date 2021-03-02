<template>
  <span v-if="Registered">
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
        this.$forceUpdate()
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

<style scoped lang="scss">
  #playerScore {
    position: fixed;
    bottom: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: right;
    font-size: 2.5vh;
    right: 10px;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
