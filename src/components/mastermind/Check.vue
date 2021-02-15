<template>
  <button id="check" @click="checkTurn" v-bind:disabled="!isCurrentTurnValid" />
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Check',
    methods: {
      ...mapActions(['checkTurn'])
    },
    computed: {
      ...mapGetters(['isCurrentTurnValid'])
    }
  }
</script>

<style lang="scss">
  #check {
    @media only screen and (max-width: 767px) {
      padding-left: 48 / 4;
      padding-right: 48 / 4;
    }
    height: 48px;
    line-height: 48px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    border-radius: 1%;
    background-color: rgb(85, 32, 41);
    padding-left: 48 / 2;
    padding-right: 48 / 2;
    color: white;
    font-size: 24px;
    position: absolute;
    text-transform: uppercase;
    bottom: 0;
    right: -20px;
    margin: 10px;
    opacity: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
    /* Hur ändrar jag "&" till att fungera utan scss?? */
    &:before {
      @media only screen and (max-width: 767px) {
        content: '✓';
      }
      content: 'Skicka';
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
  }
</style>
