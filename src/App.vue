<template>
  <div id="app">
    <router-view />
    <playerScore />
    <themeSwitch />
  </div>
</template>

<script>
  import playerScore from '@/components/playerScore.vue'
  import ThemeSwitch from '@/components/ThemeSwitch.vue'

  export default {
    name: 'App',
    components: {
      playerScore,
      ThemeSwitch
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'Arcade';
    src: url('./assets/fonts/ARCADECLASSIC.TTF') format('truetype');
  }
  #app {
    position: relative;
    letter-spacing: 0.06em;
  }
</style>
