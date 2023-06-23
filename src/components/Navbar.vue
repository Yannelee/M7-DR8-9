<template>
  <v-app-bar app color="blue darken-4" dark class="d-flex justify-center">
    <div v-if="!currentUser" class="d-flex align-center">
      <v-btn to="/" text>
        <v-icon>mdi-home</v-icon>
        <span class="ml-2">Home</span>
      </v-btn>
    </div>
    <div v-if="currentUser" class="d-flex align-center">
      <v-btn to="/" text @click="logout">
        <v-icon>mdi-logout</v-icon>
        <span class="ml-2">Salir</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'navbar-comp',
  computed:{
    ...mapState(['currentUser'])
  },
  methods:{
    ...mapActions(['setUser']),
    logout(){
      this.setUser(false)
    }
  }
}
</script>

<style>

</style>