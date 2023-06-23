import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "@/firebase/firebase.js";
import { ref, onValue } from "firebase/database";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes:[],
    heroe:{},
    currentUser: false,
  },
  getters: {
    getHeroe: state => index=>{
     return state.heroe = state.heroes[index]
    }
  },
  mutations: {
    SET_HEROES(state, heroes){
      state.heroes = heroes
    },
    SET_USER(state, user){
      state.currentUser = user
    },
  },
  actions: {
    getHeroes({commit}){
      onValue(ref(db, 'heroes'), (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          let datos = childSnapshot.val()
          commit('SET_HEROES', datos)
        });
      });
    },
    setUser({commit}, user){
      commit('SET_USER', user)
    }
  },
  modules: {
  }
})
