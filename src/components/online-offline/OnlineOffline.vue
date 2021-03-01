<template>
  <div class="online-offline">
    <li class="offline" v-if="off">Offline</li>
    <li class="online" v-if="on">Online</li>
  </div>
</template>
<script>
  export default {
    name: 'OnlineOffline',

    data() {
      return {
        on: true,
        off: false
      }
    },
    mounted() {
      addEventListener('offline', () => {
        this.off = true
        this.on = false
      })
      addEventListener('online', () => {
        this.on = true
        this.off = false
      })
    }
  }
</script>
<style scoped>
  .online-offline {
    padding: 1rem;
  }
  li {
    list-style-type: none;
  }
  .offline {
    color: tomato;
  }
</style>
