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
      </div>
      <div class="points">
        <h2>Alias {{ Alias }}</h2>
        <p>Förnamn {{ Förnamn }}</p>
        <p>Efternamn {{ Efternamn }}</p>
        <p>Magic score {{ userScore }}</p>
        <share-btn />
      </div>
    </section>
    <h2 class="h2-settings">Settings</h2>
    <section class="settings">
      <div class="settings-text">
        <p>Profile</p>
        <p>Password</p>
        <p>Sound</p>
      </div>
      <div class="settings-btns">
        <button class="btn btn-secondary">
          Edit
        </button>
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
        Förnamn: localStorage.getItem('Förnamn'),
        Efternamn: localStorage.getItem('Efternamn'),
        userScore: localStorage.getItem('userScore')
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    margin: 0;
  }

  .menu-btn {
    display: flex;
    position: absolute;
    left: 70%;
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

  h1,
  h2 {
    font-size: 1.8rem;
  }
  .h2-settings {
    margin-top: 4rem;
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
  }
  .settings {
    display: flex;
    flex-direction: row;
    margin-top: 2.5em;
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
