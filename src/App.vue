<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue";


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  #app{
    background: url('@/assets/background.jpg') center top;
  }
  .v-main__wrap{
    background-color: #000000bf;
    display: flex;
    align-items:center;
  }
</style>