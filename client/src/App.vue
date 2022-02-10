<template>
  <nav class="flex bg-gray-200 dark:bg-gray-700 rounded-b">
    <div class="flex container justify-center gap-5 py-1 font-light">
      <router-link :active-class="activeLinkClasses" class="hover:text-blue-500 dark:hover:text-white py-2 px-1" to="/">Home</router-link>
      <router-link :active-class="activeLinkClasses" class="hover:text-blue-500 dark:hover:text-white py-2 px-1" to="/communities">Communities</router-link>
    </div>
    <div class="py-1 ml-auto pr-2 flex gap-2">
      <div class="h-10">
        <img class="rounded-full h-full w-full object-contain" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="User">
      </div>
      <button type="button" @click.prevent="themeToggle()" class="bg-black shadow-2xl shadow-black py-2 px-3 dark:bg-white rounded"></button>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      activeLinkClasses:
        'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 dark:text-white dark:text-blue-700',
    };
  },
  methods: {
    themeToggle() {
      if(localStorage.theme === 'light') {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    },
  },
  created() {
    if(localStorage.theme === undefined) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  }
};
</script>
