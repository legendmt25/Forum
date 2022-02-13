<template>
  <create-community
    :class="!showAddCommunity ? 'hidden' : ''"
    @close="showAddCommunity = false"
  ></create-community>
  <div class="home flex gap-5">
    <random-posts></random-posts>
    <div
      class="flex flex-col gap-2 w-52 rounded p-5 bg-neutral-100 dark:bg-neutral-600 dark:text-white shadow-md text-center"
    >
      <span class="text-sm"
        >Create your own community or post to another communities that you are
        in here:</span
      >
      <router-link
        to="/submit"
        class="w-full py-1 shadow-sm self-end dark:bg-sky-800 hover:dark:bg-sky-700 bg-blue-500 text-white text-sm dark:text-neutral-200 rounded-full hover:bg-blue-400 transition-all font-bold"
        >Create post</router-link
      >
      <router-link
        @click="showAddCommunity = !showAddCommunity"
        to="/"
        class="w-full py-1 shadow-sm self-end dark:bg-sky-800 hover:dark:bg-sky-700 bg-blue-500 text-sm text-white dark:text-neutral-200 rounded-full hover:bg-blue-400 transition-all font-bold"
        >Create community</router-link
      >
    </div>
  </div>
</template>

<script>
import RandomPosts from '../components/RandomPosts.vue';
import CreateCommunity from '../components/createCommunity.vue';

export default {
  name: 'homeView',
  data() {
    return {
      showAddCommunity: false,
    };
  },
  components: { RandomPosts, CreateCommunity },
};
</script>
