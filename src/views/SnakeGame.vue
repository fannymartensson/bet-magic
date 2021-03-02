<template>
  <div class="snakegame">
    <header>
      <Return class="menu-btn" :return="true" />
    </header>
    <h1>Snake</h1>
    <SnakeApp />
  </div>
</template>

<script>
  import SnakeApp from '@/components/SnakeGame/SnakeApp.vue'
  import Return from '@/components/return.vue'

  export default {
    name: 'SnakeGame',
    components: {
      SnakeApp,
      Return
    }
  }
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    position: absolute;
    top: 10%;
    left: 35%;
  }

  .menu-btn {
    position: absolute;
    left: 76%;
    top: 1%;
  }
</style>
