import Vue from 'vue'
import VueRouter from 'vue-router'
import EmpView from '../views/Tlias/EmpView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Emp',
    name: 'Emp',
    component: EmpView
  },
  {
    path: '/Dep',
    name: 'Dep',

    component: () => import( '../views/Tlias/DepView.vue')
  },
  {
    path: '/',
    redirect: '/Emp'
  }
]

const router = new VueRouter({
  routes
})

export default router
