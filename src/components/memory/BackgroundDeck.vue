<template>
  <div class="background">
    <div class="background__drop-line" />
    <div class="background__drop-line" />
    <div class="background__drop-line" />
    <div class="background__drop-line" />
    <div class="background__drop-line" />
    <div class="background__drop-line" />
    <div class="background__drop-line" />
  </div>
</template>
<script>
  export default {
    name: 'BackgroundDeck'
  }
</script>

<style lang="scss">
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
    width: 90vw;

    &__drop-line {
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
      background: rgba(255, 255, 255, 0.1);
      transition: background-color 0.5s;
      &::after {
        content: '';
        display: block;
        position: absolute;
        height: 15vh;
        width: 100%;
        top: -50%;
        left: 0;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          #bd57c8 80%,
          #bd57c8 100%
        );
        animation: backgroundDropDown 8s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
      }
      &:nth-child(1) {
        margin-left: -38%;
        &::after {
          animation-delay: 4s;
        }
      }
      &:nth-child(2) {
        margin-left: -24%;
        &::after {
          animation-delay: 2s;
        }
      }
      &:nth-child(4) {
        margin-left: 24%;
        &::after {
          animation-delay: 2s;
        }
      }
      &:nth-child(5) {
        margin-left: 38%;
        &::after {
          animation-delay: 4s;
        }
      }
    }
  }

  @keyframes backgroundDropDown {
    0% {
      top: -45%;
    }
    100% {
      top: 100%;
    }
  }
</style>
