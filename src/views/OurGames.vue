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
  button {
    background: transparent;
    border: none;
    margin: 2rem;
    cursor: pointer;
  }
  h1 {
    color: white;
    text-align: center;
  }

  .logo-img {
    max-width: 6rem;
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

    color: #fff;
  }
  #app {
    position: relative;
    padding: 20px 0;
    overflow: hidden;
  }
</style>
