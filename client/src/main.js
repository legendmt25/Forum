import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.name == 'loginView')) {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (typeof user.id == 'undefined') {
        return next('/');
      }
      return next();
    } catch (err) {
      err;
    }
  }
  return next();
});
createApp(App).use(router).mount('#app');
