import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue')
  },
  {
    path: '/community/:id',
    name: 'CommunityDetails',
    component: () => import('@/views/CommunityDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
