<template>
  <span>
    <button class="btn-return" @click="backa">Tillbaka</button>
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
    padding: 0em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    margin-top: 0.9em;
    border-radius: 0;
    background-color: black;
  }
</style>
