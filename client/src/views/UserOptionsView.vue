<template>
  <div class="flex gap-3 dark:text-white">
    <router-link
      class="border-b p-2"
      :to="{ name: 'account-options', params: {} }"
      >Account</router-link
    >
    <router-link
      class="border-b p-2"
      :to="{ name: 'notifications-options', params: {} }"
      >Notifications</router-link
    >
    <router-link
      class="border-b p-2"
      :to="{ name: 'profile-options', params: {} }"
      >Profile</router-link
    >
  </div>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue';

export default {
  setup() {
    const user = provide(
      'user',
      ref(JSON.parse(sessionStorage.getItem('user')))
    );
    return {
      user,
    };
  },
};
</script>
