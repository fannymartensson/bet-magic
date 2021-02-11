<template>
  <div class="body">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <menu-btn class="menu-btn" :menuBtn="true" />
    </header>

    <h1>Games</h1>
    <gameList />
  </div>
</template>
<script>
  import MenuBtn from '@/components/MenuBtn.vue'
  import LogoIcon from '@/components/LogoIcon.vue'
  import gameList from '@/components/gameList.vue'

  export default {
    components: {
      gameList,
      MenuBtn,
      LogoIcon
    }
  }
</script>
<style lang="scss">
  h1 {
    color: white;
    text-align: center;
  }
  * {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 2rem;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    position: relative;
    padding: 20px 0;
    overflow: hidden;
  }
  .nav-link {
    text-decoration: none;
    color: #fff;
    font-size: 30px;
  }
  .menu {
    padding: 2rem;
    text-align: center;
    list-style-type: none;
  }
</style>
