<template>
  <v-footer padless color="blue darken-4" dark>
    <v-col
      class="text-center"
      cols="12"
    >
    <strong>Bienvenido a Vuetify</strong> - {{ new Date().getFullYear() }}
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'footer-comp'

}
</script>