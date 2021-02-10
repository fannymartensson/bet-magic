<template>
  <a>
    <img
      v-if="logoIcon"
      class="logo-img"
      src="../assets/logo-text.svg"
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
    margin: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .logo-img {
    max-width: 20rem;
    margin-top: 0px;
  }
</style>
