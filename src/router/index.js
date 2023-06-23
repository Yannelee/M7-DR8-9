import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Heroes from '../views/Heroes.vue'
import Details from '../views/HeroeDetail.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: Heroes,
    
  },
  {
    path: '/heroe/:index',
    name: 'details',
    component: Details,
    props: true,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },

]

const router = new VueRouter({
  routes
})

export default router
