<template>
  <div class="card" :class="{ open: open && active }" @click="open = !open">
    <div class="img" :style="backgroundImage" />
    <div class="title">{{ item.title }}</div>
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
    props: ['item', 'active']
  }
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    width: 100%;
    height: 600px;
    background-color: #efefef;
    overflow: hidden;
    transition: all 0.5s ease;
    &.open {
      height: auto;
      transform: translateY(-50px);
    }
    .img {
      width: 100%;
      height: 600px;
      background-position: center;
      background-size: cover;
    }
    .title {
      text-align: center;
      position: relative;
      bottom: 50px;
      padding: 15px 10px;
      width: calc(100% - 20px);
      height: 40px;
      font-size: 1.6rem;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
    .description {
      padding: 20px;
      text-align: center;
      color: black;
    }
  }
</style>
