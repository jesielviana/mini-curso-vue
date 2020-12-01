import Vue from 'vue'
import VueRouter from 'vue-router'
import TemplatePadrao from '../templates/Padrao.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: TemplatePadrao,
    redirect: 'posts',
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

router.beforeEach((to, from, next) => {
  console.log('from: ', from, ' to: ', to)
  const HOME = '/'
  const LOGIN = '/login'
  const PAGINA_INICAL_AUTENTICADO = '/dashboard'
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      if (to.path === LOGIN) {
        next({ path: PAGINA_INICAL_AUTENTICADO })
      }
      next()
    } else {
      if (to.path !== HOME && to.path !== LOGIN) {
        next({ path: LOGIN })
      }
    }
  })
  next()
})

// https://twitter.com/brunocartaxo/status/1333380254384095232

export default router
