<template>
  <div class="background-img">
    <logo-icon class="logo-btn" :logoIcon="true" />
    <nav>
      <ul class="menu">
        <li class="nav-item">
          <router-link class="nav-link" to="/">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">OUR GAMES</router-link>
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

<style>
  .background-img {
    background-image: url('../assets/Backgrund.svg');
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-attachment: fixed;
  }
  .logo-icon {
    display: flex;
    justify-content: center;
  }
  .menu {
    padding: 2rem;
    text-align: center;
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
