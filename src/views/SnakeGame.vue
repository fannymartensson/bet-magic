<template>
  <div class="snakegame">
    <SnakeApp />
  </div>
</template>

<script>
  import SnakeApp from '@/components/SnakeGame/SnakeApp.vue'

  export default {
    name: 'SnakeGame',
    components: {
      SnakeApp
    }
  }
</script>

<style scoped lang="scss"></style>
