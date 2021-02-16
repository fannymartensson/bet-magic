<template>
  <div id="Ufo-shooting">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <Return class="menu-btn" :return="true" />
    </header>
    <h1>UFO Shooting Game</h1>

    <UfoShooting />
  </div>
</template>

<script>
  import UfoShooting from '@/components/UfoShooting/UfoShooting.vue'
  import Return from '@/components/return.vue'
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    components: {
      UfoShooting,
      Return,
      LogoIcon
    }
  }
</script>
<style scoped lang="scss">
  #Ufo-shooting {
    text-align: center;
  }
</style>
