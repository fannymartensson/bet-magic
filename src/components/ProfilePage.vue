<template>
  <div class="profile-page">
    <menu-btn class="menu-btn" :menuBtn="true" />
    <header>
      <h1>Your Profile</h1>
    </header>
    <section class="profile-overview">
      <h2>Avatar</h2>
      <div class="points">
        <p>Points: 10401</p>
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
        <button
          type="button"
          class="btn btn-secondary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          Change
        </button>
        <span class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="radio" autocomplete="off" />
            On
          </label>
          <label class="btn btn-secondary">
            <input type="radio" autocomplete="off" />
            Off
          </label>
        </span>
        <button
          type="button"
          class="btn btn-secondary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          Dark
        </button>
      </div>
    </section>
  </div>
</template>
<script>
  import MenuBtn from '@/components/MenuBtn.vue'

  export default {
    name: 'ProfilePage',
    components: { MenuBtn }
  }
</script>

<style scoped>
  /* Makes buttons etc square */
  .card,
  .btn,
  .form-control {
    border-radius: 0;
    background-color: black;
  }

  .btn {
    padding: 0em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    margin-top: 0.9em;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }

  header {
    margin-top: 4em;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .h2-settings {
    margin-top: 6em;
  }

  .profile-page {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  .profile-overview {
    margin-top: 3em;
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
    margin-top: 2em;
  }

  .settings-btns {
    display: flex;
    flex-direction: column;
    margin-left: 3em;
  }
</style>
