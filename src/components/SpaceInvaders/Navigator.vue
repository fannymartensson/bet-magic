<template>
  <div>
    <p>Navigation</p>
    <button class="navigation-btn">LEFT</button>
    <button class="navigation-btn">RIGHT</button>
    <button class="shoot-btn">SHOOT</button>
  </div>
</template>

<script>
  export default {
    components: {},
    methods: {}
  }
</script>
<style scoped lang="scss">
  .navigation-btn {
    padding: 0em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    margin-top: 0.9em;
    border-radius: 0;
    background-color: black;
    border-color: white;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
  .shoot-btn {
    padding: 0em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    margin-top: 0.9em;
    border-radius: 0;
    background-color: red;
    border-color: white;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
