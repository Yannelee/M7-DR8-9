<template>
  <div class="heroes">
    <div class="blur"></div>
    <div class="content">
      <!-- ICONS -->
      <div class="titleIcons mx-8 mb-5">
        <h1 class="title">Héroes</h1>
        <v-icon color="grey lighten-3" class="mr-3">mdi-shield-half-full</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-target</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-plus</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-sword</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-arch</v-icon>
        <v-icon color="grey lighten-3" class="mr-3">mdi-hand-back-right</v-icon>
      </div>
      <!-- TABLE -->
      <v-simple-table dark class="overflow-auto my-8">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center" width="500px">Héroe</th>
              <th class="text-center" width="500px">Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(heroe, index) in heroes" :key="index">
              <td class="text-center">
                <v-avatar size="x-large" class="my-3">
                  <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="200" max-width="200" :src="heroe.img"></v-img>
                </v-avatar>
              </td>
              <td class="px-10"><Login :heroeName="index"/></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import { mapState, mapActions } from "vuex";

export default {
  name:'heroes-comp',
  components: {
    Login
  },
  data: () => ({
    dialog: false,
  }),
  computed:{
    ...mapState(['heroes', 'heroe'])
  },
  methods:{
    ...mapActions(['getHeroes']),
  },
  created(){
    this.getHeroes()
  },
}
</script>

<style scoped>
  .heroes{
    position: relative;
    margin: auto;
  }
  .blur{
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