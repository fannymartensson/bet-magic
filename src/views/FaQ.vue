<template>
  <div class="body">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <menu-btn class="menu-btn" :menuBtn="true" />
    </header>
    <h1>FAQ</h1>
   
  </div>
</template>
<script>
  import MenuBtn from '@/components/MenuBtn.vue'
  import LogoIcon from '@/components/LogoIcon.vue'
  
 

  export default {
    components: {
    
      MenuBtn,
      LogoIcon
    }
  }
</script>
<style lang="scss">
  @import '../assets/scss/global.scss';
  h1 {
    text-align: center;
    font-size: $h1;
  }
  * {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .menu {
    padding: 2rem;
    text-align: center;
    list-style-type: none;
  }
  @media screen and (min-width: 759px) {
    logo-btn {
      margin-left: 0px;
    }
  }
</style>
