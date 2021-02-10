<template>
  <div class="background-nav">
    <logo-icon class="logo-btn" :logoIcon="true" />
    <nav>
      <ul class="menu">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/our-games">OUR GAMES</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">FAQ</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    name: 'NavigationBar',
    components: {
      LogoIcon
    }
  }
</script>

<style scoped>
  .background-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu {
    padding: 2rem;
    text-align: center;
    list-style-type: none;
  }
  .nav-link {
    text-decoration: none;
    color: #fff;
    font-size: 30px;
  }
  .nav-item {
    padding: 1rem;
  }
</style>
