import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/community/:id',
    name: 'CommunityDetails',
    component: () => import('@/views/CommunityDetails.vue')
  },
  {
    path: '/communities',
    name: 'communitiesListViewt',
    component: () => import('@/views/CommunitiesList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
