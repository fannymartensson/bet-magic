<template>
  <div id="app">
    <div class="background-img">
      <router-view />
    </div>
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
  body,
  html {
    box-sizing: border-box;
    background: #06000c;
    padding: 0;
    margin: 0;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    overflow: auto;
  }
  #app {
    position: relative;
    letter-spacing: 0.06em;
    color: white;
  }
  .background-img {
    background-image: url('./assets/Backgrund.svg');
    background-size: cover;
    background-position: center center;
    min-height: 93vh;
  }
</style>
