<template>
  <div id="SpaceInvaders">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <Return class="menu-btn" :return="true" />
    </header>
    <h1>Space Invaders</h1>

    <SpaceInvaders />
  </div>
</template>

<script>
  import SpaceInvaders from '@/components/SpaceInvaders/SpaceInvaders.vue'
  import Return from '@/components/return.vue'
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    components: {
      SpaceInvaders,
      Return,
      LogoIcon
    }
  }
</script>
<style scoped lang="scss">
  #SpaceInvaders {
    text-align: center;
  }
</style>
