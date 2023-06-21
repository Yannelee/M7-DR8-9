<template>
  <div class="heroes">
    <div class="test"></div>
    <div class="content">
      <div class="titleIcons mx-8 mb-5">
        <h1 class="title">Héroes</h1>
        <v-icon color="grey lighten-3" class="mr-3">mdi-shield-half-full</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-target</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-plus</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-sword</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-arch</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-hand-back-right</v-icon>
      </div>

      <v-simple-table dark class="mx-5 overflow-auto mt-8">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Heroe</th>
              <th class="text-left">Nombre</th>
              <th class="text-left">Funcion</th>
              <th class="text-left">Titulo</th>
              <th class="text-left">Ataque</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="heroe in heroes"
              :key="heroe.nombre"
            >
              <td>
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="150"
                  max-width="250"
                  :src="heroe.img"
                ></v-img>
              </td>
              <td>{{ heroe.nombre }}</td>
              <td>{{ heroe.funcion }}</td>
              <td>{{ heroe.titulo }}</td>
              <td>{{ heroe.ataque }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:'heroes-comp',
  computed:{
    ...mapState(['heroes'])
  },

}
</script>

<style scoped>
  .heroes{
    position: relative;
    margin: auto;
  }
  .test{
    background: url("@/assets/background2.jpg") center top;
    background-size: 100%;
    filter: blur(.4rem);
    height: 100vh;
    width: 101vw;
    position: fixed;
    top: 0;
    left: -1vh;
  }
  .content{
    position: relative;

  }
  .titleIcons{
    align-self:initial !important;
  }
  .title {
    color: #FFF;
  }
  .v-data-table{
    height: 70vh;
  }

</style>>