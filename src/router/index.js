import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/tests',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router