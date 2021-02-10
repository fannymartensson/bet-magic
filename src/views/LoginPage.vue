<template>
  <div class="login">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <menu-btn class="menu-btn" :menuBtn="true" />
    </header>
    <main>
      <form class="login-form">
        <h1 class="login-title">Login</h1>
        <div class="textbox">
          <input type="email" class="email" placeholder="username or Email" />
        </div>
        <div class="textbox">
          <input type="password" class="Password" placeholder="password" />
        </div>
        <div class="check-box">
          <input class="check-box" type="checkbox" name="remember" />
          <label for="remember">REMEMBER ME</label>
        </div>
        <div class="submit-btn">
          <input class="form-btn" type="submit" value="LOG IN" />
        </div>
        <div class="submit-btn">
          <router-link to="/signup"
            ><input class="form-btn" type="submit" value="SIGN UP"
          /></router-link>
        </div>
      </form>
    </main>
  </div>
</template>
<script>
  import MenuBtn from '@/components/MenuBtn.vue'
  import LogoIcon from '@/components/LogoIcon.vue'
  export default {
    components: { MenuBtn, LogoIcon },
    name: 'LoginPage'
  }
</script>
<style scoped>
  main {
    display: flex;
    justify-content: center;
  }
  .login-title {
    font-size: 40px;
    text-align: center;
  }
  .login-form {
    padding: 2rem;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    color: white;
    height: 31rem;
    border: 1px solid white;
    width: 17rem;
    margin-left: 6px;
    border-radius: 6px;
  }

  .textbox,
  .submit-btn {
    overflow: hidden;
    padding: 17px 9px;
  }
  .textbox input {
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    background: transparent;
    color: white;
    font-size: 17px;
    border-radius: 6px;
    max-width: 15rem;
    height: 2.5em;
    outline: none;
    padding-left: 6px;
  }
  .check-box {
    margin: 0 9px;
  }
  .form-btn {
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    min-width: 100%;
    background: none;
    border: 1px solid white;
    color: white;
    padding: 9px 11px;
    font-size: 23px;
    cursor: pointer;
    margin: 0;
    border-radius: 6px;
  }
</style>
