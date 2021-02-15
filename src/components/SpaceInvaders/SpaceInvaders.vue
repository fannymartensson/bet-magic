<template>
  <div>
    <p>Spaceinvadors component</p>
    <ScoreCard />

    <PlayGround />
    <Navigator />
  </div>
</template>

<script>
  import PlayGround from '@/components/SpaceInvaders/PlayGround.vue'
  import ScoreCard from '@/components/SpaceInvaders/ScoreCard.vue'
  import Navigator from '@/components/SpaceInvaders/Navigator.vue'
  export default {
    components: {
      PlayGround,
      ScoreCard,
      Navigator
    }
  }
</script>
<style scoped lang="scss">
  p {
    text-align: center;
    color: white;
  }
</style>
