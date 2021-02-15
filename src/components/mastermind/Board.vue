<template>
  <section id="board">
    <section id="secret" />
    <Turn
      v-for="turn in total"
      v-bind:class="{ active: isActive(total - turn) }"
      v-bind:key="total - turn + 1"
      v-bind:index="total - turn + 1"
    />
  </section>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  import Turn from './Turn.vue'

  export default {
    name: 'Board',
    components: {
      Turn
    },
    computed: {
      ...mapGetters(['isActive']),
      ...mapState(['total'])
    }
  }
</script>

<style>
  #secret {
    height: 48px;
    line-height: 48px;
    border-radius: 1%;
    background-color: greenyellow;
    box-shadow: inset 0 0 4px 0 rgba(black, 0.2);
  }

  #board {
    width: 80%;
    background-color: white;
    border-radius: 1%;
    display: flex;
    flex-direction: column;
    padding: 3%;
  }
</style>
