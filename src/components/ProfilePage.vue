<template>
  <div>
    <section class="nav">
      <logo-icon class="logo-btn" :logoIcon="true" />
      <menu-btn class="menu-btn" :menuBtn="true" />
    </section>
    <div class="profile-page">
      <header>
        <h1>Your Profile</h1>
      </header>
      <section class="profile-overview">
        <div class="points">
          <h2>{{ Alias }}</h2>
          <p>{{ Förnamn }}</p>
          <p>{{ Efternamn }}</p>
          <p>TicTacToe: 25</p>
          <p>Ufo Shooter: 56</p>
          <p>Mastermind: 100</p>
          <p>Memory: 22</p>
          <p>Snake: 88</p>
          <p>Total score: {{ userScore }}</p>
          <button type="button" class="btn btn-secondary">Share</button>
        </div>
      </section>
      <h2 class="h2-settings">Settings</h2>
      <section class="settings">
        <div class="settings-text">
          <p>Username</p>
          <p>Password</p>
          <p>Sound</p>
          <p>Background</p>
        </div>
        <div class="settings-btns">
          TF13879
          <button type="button" class="btn btn-secondary">
            Change
          </button>
          <div class="radio">
            <div class="radio container">
              <label class="switch">
                <input type="checkbox" class="switch-input" />
                <span class="switch-label" data-on="Off" data-off="On" />
              </label>
            </div>
          </div>
          <button type="button" class="btn btn-secondary">
            Dark
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import MenuBtn from '@/components/MenuBtn.vue'
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    name: 'ProfilePage',
    components: { MenuBtn, LogoIcon },

    data() {
      return {
        Alias: localStorage.getItem('Alias'),
        Förnamn: localStorage.getItem('Förnamn'),
        Efternamn: localStorage.getItem('Efternamn'),
        userScore: localStorage.getItem('userScore')
      }
    }
  }
</script>

<style scoped lang="scss">
  /* I'll make this cleaner when we decide on a complete layout and merge our styles */

  * {
    margin: 0;
  }
  .nav {
    display: flex;
    align-content: center;
    align-items: center;
  }
  .logo-btn {
    margin-left: auto;
    margin-right: auto;
  }
  .menu-btn {
    margin-left: auto;
    margin-right: auto;
  }
  .btn {
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    border-radius: 3px;
    padding: 0.2em;
    border-radius: 4px;
    cursor: pointer;
  }

  h1,
  h2 {
    font-size: 1.8rem;
  }
  .h2-settings {
    margin-top: 4.5rem;
  }
  .profile-page {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-overview {
    margin-top: 2em;
    display: flex;
    flex-direction: row;
  }
  .points {
    display: flex;
    flex-direction: column;
    margin-left: 3em;
  }
  .settings {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
  }
  .settings-btns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 3em;
  }
  p {
    margin-top: 0.3em;
  }
</style>
