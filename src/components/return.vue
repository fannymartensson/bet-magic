<template>
  <span>
    <button @click="backa">Tillbaka</button>
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
