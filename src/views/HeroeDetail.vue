<template>
  <div class="details">
    <!-- WELCOME -->
    <v-banner color="blue darken-2" width="50rem" class="mb-5" dark>
      <h3 class="font-weight-bold">Bienvenid@ {{currentUser}}</h3>
      <v-divider class="mb-4"></v-divider>
      Aquí puedes encontrar los detalles del Héroe
    </v-banner>
    <!-- HERO DETAILS -->
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="300px" :src="heroe.img">
        <v-card-title>{{heroe.nombre}}</v-card-title>
      </v-img>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-decagram</v-icon>
        </v-list-item-icon>
        <v-card-text class="text--primary">
          <v-list-item-title>{{heroe.titulo}}</v-list-item-title>
          <v-list-item-subtitle>Título</v-list-item-subtitle>
        </v-card-text>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-tools</v-icon>
        </v-list-item-icon>
        <v-card-text class="text--primary">
          <v-list-item-title>{{heroe.funcion}}</v-list-item-title>
          <v-list-item-subtitle>Función</v-list-item-subtitle>
        </v-card-text>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-sword-cross</v-icon>
        </v-list-item-icon>
        <v-card-text class="text--primary">
          <v-list-item-title>{{heroe.ataque}}</v-list-item-title>
          <v-list-item-subtitle>Ataque</v-list-item-subtitle>
        </v-card-text>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name:'details-comp',
  props:['index'],
  data:()=>{
    return{
      heroe:{
        img:''
      }
    }
  },
  computed:{
    ...mapState(['currentUser']),
    ...mapGetters(['getHeroe']),
  },
  created(){
    this.heroe = this.getHeroe(this.index)
  }
}
</script>

<style>
  .details{
    color: white;
  }

</style>