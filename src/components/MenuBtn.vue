<template>
  <a href=""
    ><router-link class="menu-link" to="/"
      ><img src="../assets/menu-btn.svg"/></router-link
  ></a>
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
    margin-top: 2rem;
  }
  .menu-btn {
    cursor: pointer;
    height: 4rem;
    margin-top: 2rem;
    border-radius: 6px;
  }
  .menu-link {
    color: white;
    text-decoration: none;
  }
</style>
