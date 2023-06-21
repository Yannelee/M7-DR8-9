<template>
  <div class="notFound">
    <h1 class="white">PÁGINA NO ENCONTRADA</h1>
    <v-btn to="/" dark class="mt-10" color="orange darken-3">VOLVER</v-btn>
  </div>
</template>

<script>
export default {
  name:'notFound-comp'
}
</script>

<style>

  .v-main__wrap{
    justify-content: center !important;
  }
  .notFound{
    text-align: center;
  }
</style>