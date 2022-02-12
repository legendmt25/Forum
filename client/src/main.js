import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.name == 'loginView' || route.name == 'registerView')) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if(user == null) {
        return next();
      }
      return next('/');
  }
  return next();
});
createApp(App).use(router).mount('#app');
