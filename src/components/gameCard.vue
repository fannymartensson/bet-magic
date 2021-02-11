<template>
  <div class="card" :class="{ open: open && active }" @click="open = !open">
    <div class="img" :style="backgroundImage" />
    <div class="title">{{ item.title }}</div>
    <div class="submit-btn">
      <router-link :to="item.routerlink">
        <input class="button" type="Button" value="PLAY GAME"
      /></router-link>
    </div>
    <div class="description">{{ item.description }}</div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        open: false
      }
    },
    props: ['item', 'active'],
    computed: {
      backgroundImage() {
        return {
          'background-image':
            'url(' + require('../assets' + this.item.img) + ')'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    margin-top: 40px;
    position: relative;
    max-width: auto;
    height: 400px;
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    &.open {
      height: auto;
      transform: translateY(-20px);
    }
    .img {
      width: 100%;
      height: 400px;
      background-position: center;
      background-size: cover;
    }
    .title {
      text-align: center;
      position: relative;
      bottom: 70px;
      padding: 10px;
      width: calc(100% - 20px);
      height: 30px;
      font-size: 1.6rem;
      color: black;
      background-color: rgba($color: #ffffff, $alpha: 0.8);
    }
    .submit-btn {
      margin-top: 20px;
      text-align: center;
      position: relative;
      bottom: 40px;
    }
    .button {
      background-color: transparent;
      padding: 10px;
      font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
      color: white;
      border: 1px solid white;
      width: 100px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 6px;
    }

    a {
      text-decoration: none;
      color: white;
    }
    .description {
      bottom: 40px;
      position: relative;
      padding: 25px;
      text-align: left;
      color: white;
    }
  }
</style>
