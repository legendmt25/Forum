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
  {
    path: '/user/options',
    name: 'userOptionsView',
    component: () => import('@/views/UserOptionsView.vue'),
    children: [
      {
        name: 'account-options',
        path: 'account',
        component: () => import('@/views/UserOptionsAccount.vue'),
      },
      {
        name: 'notifications-options',
        path: 'notifications',
        component: () => import('@/views/UserOptionsNotifications.vue')
      },
      {
        name: 'profile-options',
        path: 'profile',
        component: () => import('@/views/UserOptionsProfile.vue')
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
