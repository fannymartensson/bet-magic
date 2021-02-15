<template>
  <main>
    <game-load v-if="gameLoadStatus" />
    <game-finish
      class="finish"
      v-if="status === 'WON'"
      @play-again="$store.dispatch('b/updateDeck')"
    />
    <div v-else-if="status === 'SUIT'" class="main-deck">
      <div v-for="card in cardsList" :key="card.id">
        <Card-list
          :cardName="card.name"
          :pic="cardImg(card.name)"
          :is-matched="card.isMatched"
          :first-id="cardNumOne && cardNumOne.id"
          :second-id="cardNumTwo && cardNumTwo.id"
          :id="card.id"
          :show-all="showAll"
          @reveal-card="$store.dispatch('b/showCard', card)"
        />
      </div>
    </div>
  </main>
</template>
<script>
  import CardList from '@/components/memory/CardList.vue'
  import GameLoad from '@/components/memory/GameLoad.vue'
  import GameFinish from '@/components/memory/GameFinish.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'MemoryCard',
    components: { CardList, GameLoad, GameFinish },
    computed: {
      ...mapGetters({
        cardsList: 'b/getCards',
        status: 'b/getStatus',
        cardNumOne: 'b/getCardNumOne',
        cardNumTwo: 'b/getCardNumTwo',
        gameLoadStatus: 'b/getGameLoadStatus'
      })
    },
    created() {
      this.$store.dispatch('b/updateDeck')
    },
    data() {
      return {
        showAll: false
      }
    },
    //TO SEE THE FRONT CARD
    methods: {
      cardImg(image) {
        if (!image) {
          return ''
        }
        return image.replace(/\s/g, '-')
      }
    }
  }
</script>
<style scoped>
  .main-deck {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: auto;
    grid-gap: 5px;
    justify-content: center;
    text-align: center;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 6rem;
  }
  .finish {
    cursor: pointer;
  }
  @media screen and (min-width: 547px) and (max-width: 626px) {
    .main-deck {
      grid-template-columns: repeat(4, 120px);
    }
  }
  @media screen and (min-width: 627px) and (max-width: 807px) {
    .main-deck {
      grid-template-columns: repeat(4, 150px);
    }
  }
  @media (min-width: 808px) {
    .main-deck {
      grid-template-columns: repeat(6, 150px);
    }
  }
</style>
