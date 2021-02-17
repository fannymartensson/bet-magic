<template>
  <div class="mastermind">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <Return class="menu-btn" :return="true" />
    </header>
    <h1>Mastermind</h1>
    <Mastermind />
  </div>
</template>

<script>
  import Mastermind from '../components/mastermind/Mastermind.vue'
  import Return from '@/components/return.vue'
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    name: 'Game',
    components: {
      Mastermind,
      Return,
      LogoIcon
    }
  }
</script>

<style scoped lang="scss"></style>
