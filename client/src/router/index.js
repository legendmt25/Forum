import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/community/:id',
    name: 'communityDetailsView',
    component: () => import('@/views/CommunityDetails.vue'),
  },
  {
    path: '/communities',
    name: 'communitiesListView',
    component: () => import('@/views/CommunitiesList.vue'),
  },
  {
    path: '/register',
    name: 'registerView',
    component: () => import('@/views/RegisterView.vue'),
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/submit',
    name: 'createPostView',
    component: () => import('@/views/CreatePost.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
