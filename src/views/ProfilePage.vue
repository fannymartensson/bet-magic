<template>
  <div class="profile-page">
    <header>
      <menu-btn class="menu-btn" :menuBtn="true" />
    </header>
    <section class="profile-overview">
      <div class="profile-left">
        <img
          src="https://avatars.dicebear.com/api/identicon/yellow.svg"
          alt="Avatar"
          width="200"
          height="100"
        />
        <share-btn />
      </div>
      <div class="points">
        <h1>Alias {{ Alias }}</h1>
        <p>TicTacToe: 0</p>
        <p>Ufo Shooter: 0</p>
        <p>Mastermind: 0</p>
        <p>Memorycards: 0</p>
        <p v-if="SnakeHighscore">Snake : {{ SnakeHighscore }}</p>
        <p v-else>Snake : 0</p>
        <br />
        <h3>
          <b>Magic score {{ userScore }}</b>
        </h3>
      </div>
    </section>
    <h2 class="h2-settings">Settings</h2>
    <section class="settings">
      <div class="settings-text">
        <p>Profile</p>
        <p>Password</p>
        <p>Logout</p>
      </div>
      <div class="settings-btns">
        <button class="btn btn-secondary">
          Edit
        </button>

        <div class="radio">
          <div class="radio-container">
            <label class="switch">
              <input type="checkbox" class="switch-input" />
              <span class="switch-label" data-on="Off" data-off="On" />
            </label>
          </div>
        </div>
        <button @click="logout" class="btn btn-secondary">
          Log Out
        </button>
      </div>
    </section>
  </div>
</template>
<script>
  import MenuBtn from '@/components/MenuBtn.vue'
  import ShareBtn from '@/components/ProfilePage/ShareBtn.vue'

  export default {
    name: 'ProfilePage',
    components: { MenuBtn, ShareBtn },
    data() {
      return {
        Alias: localStorage.getItem('Alias'),
        userScore: localStorage.getItem('localScore'),
        snakeHighscore: localStorage.getItem('SnakeHighscore')
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('Registered')
        this.$store.state.playerData.signedUp = false
        return this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    margin: 0;
  }

  .menu-btn {
    position: absolute;
    left: 76%;
    top: 1%;
  }

  .btn {
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    border-radius: 3px;
    padding: 0.2em;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn:hover {
    background: white;
    color: black;
  }

  .logout-btn {
    margin-top: 40%;
  }

  h1 {
    position: absolute;
    top: -40%;
    left: -55%;
  }

  h1,
  h2 {
    font-size: 1.8rem;
  }
  .h2-settings {
    margin-top: 6rem;
  }
  .profile-page {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-overview {
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    position: relative;
    right: 6%;
  }
  .points {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -20%;
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
    margin-top: 0.6em;
  }

  .profile-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switch:hover {
    background-color: white;
    color: black;
  }
</style>
