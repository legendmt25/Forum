<template>
  <nav class="flex bg-white shadow-md dark:bg-sky-800 rounded-b">
    <div class="flex container justify-center gap-5 py-1 font-light">
      <router-link
        :active-class="activeLinkClasses"
        :class="{
          'hover:text-blue-500 dark:hover:text-white': this.$route.path !== '/',
        }"
        class="font-bold text-lg py-2 px-1"
        to="/"
        >Home</router-link
      >
      <router-link
        :active-class="activeLinkClasses"
        :class="{
          'hover:text-blue-500 dark:hover:text-white':
            this.$route.path !== '/communities',
        }"
        class="font-bold text-lg py-2 px-1"
        to="/communities"
        >Communities</router-link
      >
    </div>
    <div class="py-1 ml-auto pr-2 flex gap-2">
      <user-info-nav></user-info-nav>
      <button
        type="button"
        @click.prevent="themeToggle()"
        class="bg-black shadow-2xl shadow-black py-2 px-3 dark:bg-white rounded"
      ></button>
    </div>
  </nav>
</template>

<script>
import UserInfoNav from "./UserInfoNav.vue";
export default {
  data() {
    return {
      activeLinkClasses:
        "text-white text-blue-400 dark:text-neutral-50 rounded md:bg-transparent",
    };
  },
  methods: {
    themeToggle() {
      if (localStorage.theme === "light") {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    },
  },
  created() {
    if (localStorage.theme === undefined) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  },
  components: {
    UserInfoNav,
  },
};
</script>
