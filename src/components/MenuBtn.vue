<template>
  <button class="menu-btn" v-if="menuBtn">MENU</button>
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
    color: #fff;
    border: 1px solid white;
    padding: 9px 11px;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    font-size: 2rem;
    cursor: pointer;
    height: 4rem;
    margin-top: 6rem;
    border-radius: 6px;
  }
</style>
