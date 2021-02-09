<template>
  <button>
    <img
      v-if="logoIcon"
      class="logo-img"
      src="../assets/logo-text.svg"
      alt="bet-magic-logo"
    />
  </button>
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
  button {
    background: transparent;
    border: none;
    margin: 2rem;
    cursor: pointer;
  }
  .logo-img {
    max-width: 20rem;
  }
</style>
