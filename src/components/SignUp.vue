<template>
  <div>
    <div v-if="!hasPlayers || Registered">
      <ProfilePage />
    </div>
    <div v-else class="Signup">
      <header>
        <logo-icon class="logo-btn" :logoIcon="true" />
        <menu-btn class="menu-btn" :MenuBtn="true" />
      </header>
      <main>
        <form @submit.prevent class="signup-form">
          <h1 class="signup-title">Sign Up</h1>
          <div class="textgroup">
            <input
              id="alias"
              type="text"
              placeholder="Alias"
              v-model="alias"
              required
            />
          </div>
          <div class="textgroup">
            <input
              id="firstname"
              type="text"
              placeholder="First Name"
              v-model="firstname"
              required
            />
          </div>
          <div class="textgroup">
            <input
              id="lastname"
              type="text"
              placeholder="Last Name"
              v-model="lastname"
              required
            />
          </div>
          <div class="textgroup">
            <input
              id="emailid"
              type="text"
              placeholder="Email Id"
              v-model="emailid"
              required
            />
          </div>
          <div class="textgroup">
            <input
              id="password"
              autocomplete="Password"
              type="password"
              placeholder="Password"
              v-model="password"
              required
            />
          </div>
          <div>
            <input
              class="form-btn"
              @click="
                setUser({
                  Förnamn: firstname,
                  Efternamn: lastname,
                  Email: emailid,
                  Password: password,
                  Alias: alias
                })
              "
              type="button"
              value="Sign Up"
            />
            Already have an account?<router-link to="/login"
              >Login here?</router-link
            >
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
  import MenuBtn from '@/components/MenuBtn.vue'
  import LogoIcon from '@/components/LogoIcon.vue'
  import ProfilePage from './ProfilePage.vue'
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    name: 'SignUp',
    components: { MenuBtn, LogoIcon, ProfilePage },

    data: function() {
      return {
        Registered: localStorage.getItem('Registered'),
        alias: '',
        firstname: '',
        lastname: '',
        emailid: '',
        password: '',
        confirmpassword: ''
      }
    },
    methods: {
      ...mapMutations('playerData', {
        setUser: 'setUser'
      })
      /*      start(SignUp) {
        this.setUser(SignUp)
      } */
    },
    computed: {
      ...mapGetters('playerData', {
        hasPlayers: 'hasPlayers'
      })
    }
  }
</script>
<style scoped>
  main {
    display: flex;
    justify-content: center;
  }
  .signup-title {
    font-size: 30px;
    text-align: center;
  }
  .signup-form {
    padding: 2rem;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    color: white;
    height: 31rem;
    border: 1px solid white;
    width: 40rem;
    margin-left: 6px;
    border-radius: 6px;
  }
  .textgroup {
    overflow: hidden;
    padding: 1.2em 4.4em;
  }
  .textgroup input {
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    background: transparent;
    color: #fff;
    font-size: 17px;
    border-radius: 8px;
    height: 2.3em;
    outline: none;
    padding: 1em;
    max-width: 12.8em;
    text-align: left;
  }
  .form-btn {
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    min-width: 100%;
    background: none;
    border: 1px solid #fff;
    color: white;
    padding: 12px 11px;
    font-size: 20px;
    cursor: pointer;
    margin: 0.1em;
    height: 2.5em;
    border-radius: 6px;
  }
  @media (max-width: 500px) {
    main {
      display: flex;
      justify-content: space-evenly;
    }
    .signup-form {
      width: 18rem;
      height: 36.5rem;
    }
    .textgroup {
      overflow: hidden;
      padding: 1.2rem 0.1rem;
    }
    .signup-title {
      margin: 0.5rem;
    }
  }
</style>
