import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'

const routes = [
  {
    path: '/',
    redirect: 'Home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router