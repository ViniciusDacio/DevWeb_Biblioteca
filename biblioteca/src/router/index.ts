import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaUser from '../views/TelaUsuario.vue'
import CadBook from '../views/CadastroLivro.vue'
import TelaLogin from '../views/TelaLogin.vue'
import CadUser from '../views/CadastroUsuario.vue'
import Publi from '../views/CadastroEditora.vue'
import Category from '../views/CadastroCategoria.vue'
import Carrinho from '../views/CarrinhoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',

    component: () => import('../views/TelaAdmin.vue')
  },
  {
    path: '/screen_user',
    name: 'screen_user',

    component: TelaUser
  },
  {
    path: '/cad_book',
    name: 'book',

    component: CadBook
  },
  {
    path: '/login',
    name: 'login',

    component: TelaLogin
  },
  {
    path: '/cad_user',
    name: 'cad_user',

    component: CadUser
  },
  {
    path: '/publi',
    name: 'publi',

    component: Publi
  },
  {
    path: '/category',
    name: 'category',

    component: Category
  },
  {
    path: '/carrinho',
    name: 'carrinho',

    component: Carrinho
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
