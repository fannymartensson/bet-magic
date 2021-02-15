<template>
  <div class="bigPic">
    <main id="Mastermind">
      <Return id="Return" />
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

  import Return from '../return.vue'
  import Board from './Board.vue'
  import Feedback from './Feedback.vue'
  import Check from './Check.vue'
  import Dialog from './Dialog.vue'

  export default {
    name: 'Mastermind',
    components: {
      Board,
      Feedback,
      Check,
      Dialog,
      Return
    },
    computed: {
      ...mapGetters(['checkButtonTranslation', 'isActive']),
      ...mapState(['current', 'total', 'won', 'lost', 'feedback'])
    },
    methods: {
      ...mapActions(['generateSecret'])
    },
    mounted() {
      this.generateSecret()
    }
  }
</script>

<style lang="scss" scoped>
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
    background-color: #eeeeee;
    border-radius: 0 10px 10px 0;
    padding-bottom: 10px;
    position: absolute;
    top: 100px;
    right: 0;
    z-index: -1;
    height: 85%;
  }

  .bigPic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: black;
    min-height: 100%;
    font-family: 'Dosis';
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    @media only screen and (max-width: 767px) {
      padding: 10px;
      justify-content: flex-start;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  header {
    @media only screen and (max-width: 767px) {
      display: none;
    }
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px;
    color: black;
    font-size: 16px;
  }

  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
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

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
</style>
