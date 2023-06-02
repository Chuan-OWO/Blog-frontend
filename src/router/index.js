import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes= [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/LoginView.vue')
  },
  {
    path:'/Sign',
    name:'Sign',
    component:()=>import('../views/SignUpView.vue')
  },
  //404
  {
    path:'/:pathMatch(.*)*',
    component:() => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass:'text-secondary',
  routes,
  
})

export default router
