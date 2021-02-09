<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @font-face {
    font-family: 'Arcade';
    src: url('./assets/fonts/ARCADECLASSIC.TTF') format('truetype');
  }
  #app {
    box-sizing: border-box;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
