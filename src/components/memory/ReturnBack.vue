<template>
  <div class="btn">
    <div class="return">
      <button
        class="btn-return-back"
        @click="
          'return-back'


        "
      >
        back
      </button>
    </div>
    <div>
      <h1 class="heading">Memory Card</h1>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .btn {
    z-index: 3;
  }
  .btn-return-back {
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 0.9em;
    background-color: rgb(3, 0, 0);
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    margin-left: 6rem;
  }
</style>
