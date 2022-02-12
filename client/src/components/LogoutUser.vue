<template>
  <button @click="logout()">Logout</button>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    let isAuthenticated = inject('authenticated');
    return { isAuthenticated };
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.isAuthenticated = false;
    },
  },
};
</script>
