<template>
  <div id="app">
    <div class="background-img">
      <online-offline :status="true" />
      <router-view />
    </div>
  </div>
</template>
<script>
  import OnlineOffline from '@/components/OnlineOffline.vue'

  export default {
    name: 'App',
    components: { OnlineOffline }
  }
</script>

<style>
  @font-face {
    font-family: 'Arcade';
    src: url('./assets/fonts/ARCADECLASSIC.TTF') format('truetype');
  }
  #app {
    position: relative;
    background-color: black;
    box-sizing: border-box;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    letter-spacing: 0.06em;
  }
  .background-img {
    background-image: url('./assets/Backgrund.svg');
    height: 200vh;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
</style>
