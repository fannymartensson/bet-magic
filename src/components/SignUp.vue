<template>
  <div class="Signup">
    <header>
      <logo-icon class="logo-btn" :logoIcon="true" />
      <menu-btn class="menu-btn" :MenuBtn="true" />
    </header>
    <main>
      <form @submit.prevent class="signup-form">
        <h1 class="signup-title">Sign Up</h1>
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
            type="text"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div>
          <input
            class="form-btn"
            @click="first"
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
</template>
<script>
  import MenuBtn from '@/components/MenuBtn.vue'
  import LogoIcon from '@/components/LogoIcon.vue'

  export default {
    name: 'SignUp',
    components: { MenuBtn, LogoIcon },

    data: function() {
      return {
        firstname: '',
        lastname: '',
        emailid: '',
        password: '',
        confirmpassword: ''
      }
    },
    methods: {
      first() {
        alert('Thank you for registering with BetMagic')
      }
    }
  }
</script>
<style scoped>
  main {
    display: flex;
    justify-content: center;
  }
  .signup-title {
    font-size: 40px;
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
    min-width: 100%;
    text-align: left;
  }
  .form-btn {
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    min-width: 100%;
    background: none;
    border: 1px solid #fff;
    color: white;
    padding: 12px 11px;
    font-size: 25px;
    cursor: pointer;
    margin: 0;
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
      height: 35rem;
    }
    .textgroup {
      overflow: hidden;
      padding: 1.2rem 0.08rem;
      
    }
    .signup-title {
      margin: 2rem;
    }
  }
</style>
