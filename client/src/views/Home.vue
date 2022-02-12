<template>
  <div class="home flex gap-5">
    <random-posts></random-posts>
    <div class="flex flex-col gap-2 w-1/5 rounded p-5 bg-slate-100 h-fit shadow-lg text-center">
      <span class="text-sm">Create your own community or post to another communities that you are in here:</span>
      <router-link to="/submit" class="bg-blue-400 rounded-full px-2 py-1 hover:text-white hover:bg-blue-500 transition-all shadow-md">Create post</router-link>
      <router-link to="/" class="bg-blue-400 rounded-full px-2 py-1 hover:text-white hover:bg-blue-500 transition-all shadow-md">Create community</router-link>
    </div>
  </div>
</template>

<script>
import RandomPosts from "../components/RandomPosts.vue";

export default {
    name: "homeView",
    components: { RandomPosts }
};
</script>
