<template>
  <v-app-bar
  app
  color="blue darken-4"
  dark
  class="d-flex justify-center"
  >
    <div class="d-flex align-center">
      <v-btn
      to="/"
      text
      >
      <v-icon>mdi-home</v-icon>
      <span class="ml-2">Home</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'navbar-comp'

}
</script>

<style>

</style>