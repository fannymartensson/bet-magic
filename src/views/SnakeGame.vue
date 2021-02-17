<template>
  <div class="snakegame">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <Return class="menu-btn" :return="true" />
    </header>
    <h1>Snake</h1>
    <SnakeApp />
  </div>
</template>

<script>
  import SnakeApp from '@/components/SnakeGame/SnakeApp.vue'
  import Return from '@/components/return.vue'
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    name: 'SnakeGame',
    components: {
      SnakeApp,
      Return,
      LogoIcon
    }
  }
</script>

<style scoped lang="scss"></style>
