<template>
  <div class="bigPic">
    <main id="Mastermind">
      <div id="header">
        <Restart />
        <Return />
        <CollectScore v-if="won" />
      </div>
      <h1>Mastermind</h1>
      <Board />
      <section id="feedbacks">
        <Feedback
          v-for="turn in total"
          v-bind:class="{ active: isActive(total - turn) }"
          v-bind:key="total - turn + 1"
          v-bind:fb="feedback[total - turn + 1]"
        />
      </section>
      <Check v-bind:style="{ transform: checkButtonTranslation }" />
      <Dialog v-if="won" status="happy" />

      <Dialog v-if="lost" status="sad" />
    </main>
  </div>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'

  import Board from './Board.vue'
  import Feedback from './Feedback.vue'
  import Check from './Check.vue'
  import Dialog from './Dialog.vue'
  import Restart from './Restart.vue'
  import Return from '../return.vue'
  import CollectScore from '../collectScore.vue'

  export default {
    name: 'Mastermind',
    components: {
      Board,
      Feedback,
      Check,
      Dialog,
      Restart,
      Return,
      CollectScore
    },
    computed: {
      ...mapGetters('d', {
        checkButtonTranslation: 'checkButtonTranslation',
        isActive: 'isActive'
      }),
      ...mapState('d', {
        current: 'current',
        total: 'total',
        won: 'won',
        lost: 'lost',
        feedback: 'feedback'
      })
    },
    methods: {
      ...mapActions('d', {
        generateSecret: 'generateSecret'
      })
    },
    mounted() {
      this.generateSecret()
    }
  }
</script>

<style lang="scss">
  #Return {
    border: solid white 2px;
  }
  #Mastermind {
    max-width: 290px;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  #feedbacks {
    width: 100%;
    max-width: 68px;
    box-shadow: 0 0 6px 0 rgba(black, 0.2);
    background-color: #8034a3;
    border-radius: 0 10px 10px 0;
    padding-bottom: 10px;
    position: absolute;
    top: 120px;
    right: 0;
    z-index: -1;
    height: 83%;
  }

  .bigPic {
    width: 100%;
    color: black;
    min-height: 70%;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    @media only screen and (max-width: 767px) {
      padding: 10px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
  }

  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote {
    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  q {
    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }
  #header {
    display: flex;
    justify-content: space-between;
  }
</style>
