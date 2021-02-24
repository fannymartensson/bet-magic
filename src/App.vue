<template>
  <div id="app">
    <div class="background-img">
      <router-view />
      <label class="change-theme">
        <input type="checkbox" class="theme-switch" v-model="darkMode" />Light
        Mode</label
      >
    </div>
    <playerScore />
  </div>
</template>

<script>
  import playerScore from '@/components/playerScore.vue'

  export default {
    name: 'App',
    components: {
      playerScore
    },
    data() {
      return {
        darkMode: false
      }
    },
    mounted() {
      // set page title
      document.title = 'Multiple Themes in Vue.js'

      // set 'app-background' class to body tag
      let bodyElement = document.body
      bodyElement.classList.add('app-background')

      // check for active theme
      let htmlElement = document.documentElement
      let theme = localStorage.getItem('theme')

      if (theme === 'dark') {
        htmlElement.setAttribute('theme', 'dark')
        this.darkMode = true
      } else {
        htmlElement.setAttribute('theme', 'light')
        this.darkMode = false
      }
    },
    watch: {
      darkMode: function() {
        // add/remove class to/from html tag
        let htmlElement = document.documentElement

        if (this.darkMode) {
          localStorage.setItem('theme', 'dark')
          htmlElement.setAttribute('theme', 'dark')
        } else {
          localStorage.setItem('theme', 'light')
          htmlElement.setAttribute('theme', 'light')
        }
      }
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
  .change-theme {
    position: relative;
    margin-top: 0;
    margin-right: 5px;
  }
</style>
