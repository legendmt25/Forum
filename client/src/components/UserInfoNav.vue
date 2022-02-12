<template>
  <dropdown-menu placement="left">
    <template #button>
      <img
        class="rounded-full h-10 w-10 overflow-hidden object-contain"
        src="https://styles.redditmedia.com/t5_2yo6b/styles/communityIcon_sfbxdgfr14t71.png?width=256&s=4a982d8dedd0fe64047246c7ad62738810cc9713"
        alt="User"
      />
      <span class="text-black dark:text-white p-1 drop-shadow-md">{{
        getUsername
      }}</span>
      <svg
        class="w-4 h-4 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
        />
      </svg>
    </template>
    <template #list-items>
      <div v-if="isAuthenticated">
        <li class="list-item border-b border-slate-500">
          <router-link
            to="/user/options"
            class="inline-block pl-3 py-2 drop-shadow-2xl"
            >Options</router-link
          >
        </li>
        <li><logout-user class="pl-3 py-2 drop-shadow-2xl"></logout-user></li>
      </div>
      <div v-else>
        <li class="list-item border-b border-slate-500">
          <router-link
            to="/login"
            class="inline-block pl-3 py-2 drop-shadow-2xl"
            >Login</router-link
          >
        </li>
        <li class="list-item">
          <router-link
            to="/register"
            class="inline-block pl-3 py-2 drop-shadow-2xl"
            >Register</router-link
          >
        </li>
      </div>
    </template>
  </dropdown-menu>
</template>

<script>
import { inject } from 'vue';
import DropdownMenu from './DropdownMenu.vue';
import LogoutUser from './LogoutUser.vue';
export default {
  setup() {
    let isAuthenticated = inject('authenticated');
    return { isAuthenticated };
  },
  components: {
    "dropdown-menu": DropdownMenu,
    LogoutUser
},
  computed: {
    getUsername() {
      if (this.isAuthenticated) {
        return JSON.parse(sessionStorage.getItem('user')).username;
      }
      return '';
    },
  },
};
</script>
