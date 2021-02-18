<template>
  <div class="background">
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
          #fbfafc00 0%,
          #bd57c8 75%,
          #bd57c8 100%
        );
        animation: backgroundDropDown 9s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
      }

      &:nth-child(1) {
        margin-left: -40%;
        &::after {
          animation-delay: 4s;
        }
      }
      &:nth-child(2) {
        margin-left: -20%;
        &::after {
          animation-delay: 1s;
        }
      }

      &:nth-child(4) {
        margin-left: 20%;
        &::after {
          animation-delay: 3s;
        }
      }
      &:nth-child(5) {
        margin-left: 40%;
        &::after {
          animation-delay: 4s;
        }
      }
    }
    &--success &__drop-line {
      &::after {
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          #ffffff07 75%,
          #ffffff00 100%
        );
      }
    }
  }

  @keyframes backgroundDropDown {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }
</style>
