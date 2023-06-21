<template>
 <div class="principal d-flex flex-column align-center">
    <v-card
    class="d-flex flex-column align-center my-10 mx-10"
    dark
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h4 mb-1">Desafía las expectativas de los MOBA</v-list-item-title>
          <v-list-item-title class="text-h6 mb-1">Épicos héroes y acción sin cesar en múltiples campos de batalla</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn to="/heroes" color="orange darken-3" dark>VER HÉROES</v-btn>
      </v-card-actions>
    </v-card>
    
    <v-alert
      border="left"
      color="purple darken-1"
      dark
    >
      ¡Te damos la bienvenida al Nexo! ¡En este reino entre reinos, todo es posible! Eige entre decenas de héroes legendarios de todo el panteón de Blizzard, personaliza sus talentos y habilidades en medio del combate y lucha en una infinidad de campos de batalla que redefinen el género. ¡Esto no es un MOBA promedio, esto es Heroes of the Storm!
    </v-alert>
  </div>
</template>

<script>
  export default {
    name: 'Home-comp',
    components: {
    },
  }
</script>
<style>
  .principal{
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .theme--dark.v-card{
    background-color: transparent !important;
    border: 1px solid white;
    color: white !important;
  }
  .v-application .purple.darken-1{
    background-color: #8d24aaa6 !important;
  }
</style>
