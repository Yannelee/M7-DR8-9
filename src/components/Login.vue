<template>
  <div class="login">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Ver más</v-btn>
        </template>
        <v-card>
          <v-card-title class="justify-space-between align-end">
            <span class="ml-4">Para ver los detalles del héroe inicia sesión</span>
            <v-btn class="align-self-start mb-5" text @click="close"><v-icon>mdi-close-circle</v-icon></v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-alert v-if="errorUser" type="error">Usuario o contraseña Incorrecto</v-alert>
                <v-text-field v-model="user.email" :rules="campoRequerido.concat(emailRules)" label="E-mail" required></v-text-field>
                <v-text-field v-model="user.pass" :rules="campoRequerido.concat(passRules)" label="Contraseña" required type="password"></v-text-field>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click=validate(heroeName)>Ingresar</v-btn>
                <v-btn color="error" class="mr-4" @click="reset">Borrar Formulario</v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from '@/router';
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name:'login-comp',
  props:['heroeName'],
  data:function(){
    return{
      dialog:false,
      valid: true,
      errorUser: false,
      user:{
        email:'',
        pass:''
      },
      campoRequerido:[v => !!v || 'Campo Requerido'],
      emailRules: [v => /.+@.+\..+/.test(v) || 'Email debe ser válido'],
      passRules: [v => (v && v.length >= 6) || 'Debe tener más de 6 caracteres'],
    }
  },
  computed:{
    ...mapGetters(['getHeroe']),
    ...mapState(['currentUser'])
  },
  methods: {
    ...mapActions(['setUser']),
    validate (heroeName) {
      this.$refs.form.validate()
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.pass)
        .then((userCredential) => {
          this.errorUser = false
          const user = userCredential.user;
          this.setUser(user.email)
          router.push({path: `/heroe/${heroeName}`})
        })
        .catch((error) => {
          this.errorUser = true
          console.log(error);
        });
    },
    reset () {
      this.$refs.form.reset()
      this.errorUser = false
    },
    close() {
      this.dialog = false
      this.errorUser = false
      this.$refs.form.reset()
    },
  },
}
</script>