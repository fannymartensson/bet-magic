<template>
  <div id="PlayGround">
    <head>
      <p>Playground component</p>
    </head>
    <body>
      <div id="background">
        <Hero class="hero" />
        <Invaders class="invader" />
      </div>
    </body>
  </div>
</template>

<script>
  import Hero from '@/components/SpaceInvaders/Hero.vue'
  import Invaders from '@/components/SpaceInvaders/Invaders.vue'
  export default {
    components: {
      Hero,
      Invaders
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="scss">
  #PlayGround {
    text-align: center;
  }
  p {
    color: white;
  }
  #background {
    background-color: black;
    height: 400px;
    width: 300px;
    border: 1px solid white;
    margin-left: auto;
    margin-right: auto;
  }
</style>
