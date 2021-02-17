<template>
  <span>
    <button class="btn-return" @click="backa">Back</button>
  </span>
</template>

<script>
  export default {
    methods: {
      backa() {
        return this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .btn-return {
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 0.9em;
    background-color: black;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
