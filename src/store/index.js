import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes:[
    {
      nombre:'Artanis', 
      funcion:'Agresor', 
      titulo:'Jerarca de los daelaam', 
      ataque:'111', 
      img:'https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg'
    },
    {
      nombre:'D.va', 
      funcion:'Guerrero', 
      titulo:'Piloto de MEKA', 
      ataque:'22(meca) 55(piloto)', 
      img:'https://static.heroesofthestorm.com/heroes/dva/skins/meka-pilot-800.jpg'
    },
    {
      nombre:'Ragnaros', 
      funcion:'Agresor', 
      titulo:'El señor del fuego', 
      ataque:'180', 
      img:'https://static.heroesofthestorm.com/heroes/ragnaros/skins/the-firelord-800.jpg'
    },
    {
      nombre:'Yrel', 
      funcion:'Guerrero', 
      titulo:'Jerarca de los daelaam', 
      ataque:'155', 
      img:'https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg'
    },
    {
      nombre:'Ana', 
      funcion:'Sanadora', 
      titulo:'Jerarca de los daelaam', 
      ataque:'30', 
      img:'https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg'
    },
    {
      nombre:'Auriel', 
      funcion:'Sanadora', 
      titulo:'Jerarca de los daelaam', 
      ataque:'64', 
      img:'https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg'
    },
    {
      nombre:'Malfurion', 
      funcion:'Sanadora', 
      titulo:'Jerarca de los daelaam', 
      ataque:'60', 
      img:'https://static.heroesofthestorm.com/heroes//malfurion/skins/archdruid-800.jpg'
    },
    {
      nombre:'Arthas', 
      funcion:'Tanque', 
      titulo:'Jerarca de los daelaam', 
      ataque:'95', 
      img:'https://static.heroesofthestorm.com/heroes/arthas/skins/the-lich-king-800.jpg'
    },
    {
      nombre:'Johanna', 
      funcion:'Tanque', 
      titulo:'Jerarca de los daelaam', 
      ataque:'99', 
      img:'https://static.heroesofthestorm.com/heroes/johanna/skins/crusader-of-zakarum-800.jpg'
    },
    {
      nombre:'Muradin', 
      funcion:'Tanque', 
      titulo:'Jerarca de los daelaam', 
      ataque:'88', 
      img:'https://static.heroesofthestorm.com/heroes/muradin/skins/mountain-king-800.jpg'
    },
    {
      nombre:'Illidan', 
      funcion:'Asesino cuerpo a cuerpo', 
      titulo:'Jerarca de los daelaam', 
      ataque:'87', 
      img:'https://static.heroesofthestorm.com/heroes/illidan/skins/the-betrayer-800.jpg'
    },
    {
      nombre:'Maiev', 
      funcion:'Asesino cuerpo a cuerpo', 
      titulo:'Jerarca de los daelaam', 
      ataque:'145', 
      img:'https://static.heroesofthestorm.com/heroes/miev/skins/the-warden-800.jpg'
    },
    {
      nombre:'Zeratul', 
      funcion:'Asesino cuerpo a cuerpo', 
      titulo:'Jerarca de los daelaam', 
      ataque:'131', 
      img:'https://static.heroesofthestorm.com/heroes/zeratul/skins/dark-prelate-800.jpg'
    },
    {
      nombre:'Abathur', 
      funcion:'Apoyo', 
      titulo:'Jerarca de los daelaam', 
      ataque:'27', 
      img:'https://static.heroesofthestorm.com/heroes/abathur/skins/evolution-master-800.jpg'
    },
    {
      nombre:'Medivh', 
      funcion:'Apoyo', 
      titulo:'Jerarca de los daelaam', 
      ataque:'83', 
      img:'https://www.hellofriki.com/wp-content/uploads/2016/05/medivh.jpg'
    },
    {
      nombre:'Zarya', 
      funcion:'Apoyo', 
      titulo:'Jerarca de los daelaam', 
      ataque:'22', 
      img:'https://static.heroesofthestorm.com/heroes/zarya/skins/defender-of-russia-800.jpg'
    },
    {
      nombre:'Nazeebo', 
      funcion:'Asesino a distancia', 
      titulo:'Jerarca de los daelaam', 
      ataque:'92', 
      img:'https://static.heroesofthestorm.com/heroes/nazeebo/skins/heretic-witch-doctor-800.jpg'
    },
    {
      nombre:'Genji', 
      funcion:'Asesino a distancia', 
      titulo:'Jerarca de los daelaam', 
      ataque:'44', 
      img:'https://static.heroesofthestorm.com/heroes/genji/skins/cybernetic-ninja-800.jpg'
    },
    {
      nombre:'Zagara', 
      funcion:'Asesino a distancia', 
      titulo:'Jerarca de los daelaam', 
      ataque:'85', 
      img:'https://static.heroesofthestorm.com/heroes/zagara/skins/broodmother-of-the-swarm-800.jpg'
    },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
