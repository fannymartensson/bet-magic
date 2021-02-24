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
          <p>Mastermind: 8</p>
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
  import { mapState } from 'vuex'

  export default {
    name: 'ProfilePage',
    components: { MenuBtn, LogoIcon },

    computed: {
      ...mapState('playerData', {
        Alias: 'Alias',
        Förnamn: 'Förnamn',
        Efternamn: 'Efternamn',
        Email: 'Email',
        userScore: 'userScore'
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/scss/global.scss';
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

  /* toggle button all the way */

  .container > .switch {
    display: block;
    margin: 2px auto;
  }
  .switch {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 66px;
    height: 20px;
    padding: 1px;
    border-radius: 3px;
    cursor: pointer;
  }
  .switch-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .switch-label {
    position: relative;
    display: block;
    height: inherit;
    font-size: 14px;
    background: black;
    border-radius: inherit;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12),
      inset 0 0 2px rgba(0, 0, 0, 0.15);
    -webkit-transition: 0.5s ease-out;
    -moz-transition: 0.5s ease-out;
    -o-transition: 0.5s ease-out;
    transition: 0.5s ease-out;
    -webkit-transition-property: opacity background;
    -moz-transition-property: opacity background;
    -o-transition-property: opacity background;
    transition-property: opacity background;
  }
  .switch-label:before,
  .switch-label:after {
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
    line-height: 1;
    -webkit-transition: inherit;
    -moz-transition: inherit;
    -o-transition: inherit;
    transition: inherit;
  }
  .switch-label:before {
    content: attr(data-off);
    right: 9px;
    color: rgb(255, 255, 255);
  }
  .switch-label:after {
    content: attr(data-on);
    left: 11px;
    color: $primary;
    text-shadow: 0 2px rgba(0, 0, 0, 0.2);
    opacity: 0;
  }
  .switch-input:checked ~ .switch-label {
    background: $secondary;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
  }
  .switch-input:checked ~ .switch-label:before {
    opacity: 0;
  }
  .switch-input:checked ~ .switch-label:after {
    opacity: 1;
  }
  .switch-input:checked ~ {
    left: 70px;
    box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
  }
</style>
