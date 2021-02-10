<template>
  <button class="menu-btn" v-if="menuBtn">
    <router-link class="menu-link" to="/">MENU </router-link>
  </button>
</template>
<script>
  export default {
    name: 'MenuBtn',
    props: {
      menuBtn: {
        type: Boolean
      }
    }
  }
</script>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .logo-img {
    width: 139px;
    margin-left: -2rem;
  }
  .menu-btn {
    background: transparent;

    border: 1px solid white;
    padding: 9px 11px;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    font-size: 2rem;
    cursor: pointer;
    height: 4rem;
    margin-top: 6rem;
    border-radius: 6px;
  }
  .menu-link {
    color: white;
    text-decoration: none;
  }
</style>
