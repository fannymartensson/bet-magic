<template>
  <div class="btn">
    <div>
      <h1 class="heading">Memory Card</h1>
    </div>
    <div class="return">
      <button class="btn-return-back">
        back
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReturnBack'
  }
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
    background-color: transparent;
    color: white;
    font-family: 'Arcade', Avenir, Helvetica, Arial, sans-serif;
    margin-left: 6rem;
  }
  .btn-return-back:hover {
    background: white;
    color: black;
  }
</style>
