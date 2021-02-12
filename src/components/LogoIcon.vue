<template>
  <a href="">
    <img
      v-if="logoIcon"
      class="logo-img"
      src="../assets/logo-dark.svg"
      alt="bet-magic-logo"
    />
  </a>
</template>

<script>
  export default {
    name: 'LogoIcon',
    props: {
      logoIcon: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>
  a {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  img {
    margin: 20px auto;
    display: inline;
    max-width: 100%;
    height: auto;
    min-height: 110px;
    min-width: 140px;
  }
</style>
