<template>
  <navbar-component></navbar-component>
  <div class="bg-gray-100 dark:bg-neutral-800 py-2 flex justify-center h-screen">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import NavbarComponent from './components/NavbarComponent.vue';
export default {
  components: {
    NavbarComponent,
  },
  setup() {
    let isAuthenticated = ref(typeof sessionStorage.getItem('user') == 'string');
    provide('authenticated', isAuthenticated);
    return {
      isAuthenticated
    }
  }
};
</script>
