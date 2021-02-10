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
  #app {
    background-color: black;
    box-sizing: border-box;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
  .background-img {
    background-image: url('./assets/Backgrund.svg');
    height: 200vh;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
</style>
