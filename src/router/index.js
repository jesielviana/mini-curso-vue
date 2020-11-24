import Vue from 'vue'
import VueRouter from 'vue-router'
import TemplatePadrao from '../templates/Padrao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: TemplatePadrao,
    children: [
      {
        path: '/cadastro-usuario',
        name: 'cadastro-usuario',
        component: () => import('../views/CadastroUsuario.vue')
      },
      {
        path: '/usuarios',
        name: 'usuarios',
        component: () => import('../views/Usuarios.vue')
      },
      {
        path: '/posts',
        name: 'posts',
        component: () => import('../views/Posts.vue')
      },
      {
        path: '/novo',
        name: 'novo',
        component: () => import('../views/PostForm.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
