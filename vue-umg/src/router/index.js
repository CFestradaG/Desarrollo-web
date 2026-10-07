import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import UsuarioDetalleView from '../views/UsuarioDetalleView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/usuarios', name: 'usuarios', component: UsuariosView },
    { path: '/usuarios/:id', name: 'usuario-detalle', component: UsuarioDetalleView },
    { path: '/about', name: 'about', component: AboutView }
  ]
})

export default router
