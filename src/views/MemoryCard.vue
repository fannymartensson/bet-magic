<template>
  <main>
    <return-back @click.native="back" />
    <game-load v-if="gameLoadStatus" />
    <background-deck />
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
  import BackgroundDeck from '@/components/memory/BackgroundDeck.vue'
  import ReturnBack from '@/components/memory/ReturnBack.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'MemoryCard',
    components: {
      CardList,
      GameLoad,
      GameFinish,
      ReturnBack,
      BackgroundDeck
    },
    computed: {
      ...mapGetters('b', {
        cardsList: 'getCards',
        status: 'getStatus',
        cardNumOne: 'getCardNumOne',
        cardNumTwo: 'getCardNumTwo',
        gameLoadStatus: 'getGameLoadStatus'
      })
    },
    created() {
      this.$store.dispatch('b/updateDeck')
    },
    //TO SEE THE FRONT CARD
    methods: {
      cardImg(image) {
        if (!image) {
          return ''
        }
        return image.replace(/\s/g, '-')
      },
      back() {
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .main-deck {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: auto;
    grid-gap: 5px;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    padding-top: 01rem;
    padding-bottom: 3rem;
    background: #07070783;
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
    .heading {
      font-size: 4rem;
    }
    .main-deck {
      grid-template-columns: repeat(6, 150px);
      padding: 3rem;
    }
  }
</style>
