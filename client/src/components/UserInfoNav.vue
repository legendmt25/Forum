<template>
  <dropdown-menu placement="left">
    <template #button>
      <div class="flex items-center">
        <img
          class="rounded-full h-10 w-10 overflow-hidden object-contain box-border py-1"
          src="https://styles.redditmedia.com/t5_2yo6b/styles/communityIcon_sfbxdgfr14t71.png?width=256&s=4a982d8dedd0fe64047246c7ad62738810cc9713"
          alt="User"
        />
        <span class="text-black dark:text-white p-1 drop-shadow-md">
          {{ getUsername }}</span
        >
        <svg
          class="w-4 h-4 transition-transform duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
          />
        </svg>
      </div>
    </template>
    <template #list-items>
      <div v-if="isAuthenticated" class="flex flex-col gap-2 py-2 px-0.5">
        <li class="list-item border-slate-500">
          <router-link
            to="/user/options"
            class="flex px-4 rounded-md hover:bg-sky-400 drop-shadow-md py-1"
            >Options</router-link
          >
        </li>
        <li>
          <logout-user
            class="flex px-4 rounded-md w-full hover:bg-sky-400 drop-shadow-md py-1"
          ></logout-user>
        </li>
      </div>
      <div v-else class="flex flex-col gap-2 py-2 px-0.5">
        <li class="list-item border-slate-500">
          <router-link
            to="/login"
            class="flex px-4 rounded-md hover:bg-sky-400 drop-shadow-md py-1"
            >Login</router-link
          >
        </li>
        <li class="border-b px-1"></li>
        <li class="list-item border-slate-500">
          <router-link
            to="/register"
            class="flex px-4 rounded-md hover:bg-sky-400 drop-shadow-md py-2"
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
    'dropdown-menu': DropdownMenu,
    LogoutUser,
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
