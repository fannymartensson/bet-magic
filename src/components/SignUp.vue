<template>
  <div>
    <div v-if="hasPlayers" class="Signup">
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
    <div v-else>
      <ProfilePage />
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
        loggedIn: this.$store.state.playerData.signedUp,
        alias: '',
        firstname: '',
        lastname: '',
        emailid: '',
        password: '',
        confirmpassword: ''
      }
    },
    computed: {
      ...mapGetters('playerData', {
        hasPlayers: 'hasPlayers'
      })
    },
    methods: {
      ...mapMutations('playerData', {
        setUser: 'setUser'
      }),
      start(SignUp) {
        this.setUser(SignUp)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/scss/forms.scss';
</style>
