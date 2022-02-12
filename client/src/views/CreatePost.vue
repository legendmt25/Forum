<template>
  <div class="flex flex-col p-24 gap-10 dark:text-white">
    <select-community></select-community>
    <input-component which="post" property="title"></input-component>
    <label class="flex flex-col gap">
      <span class="font-bold">Post</span>
      <textarea
        class="resize-y shadow-md dark:bg-neutral-600 form-input rounded-md p-3 border"
        v-model="obj.str"
      ></textarea>
    </label>
    <create-post-button></create-post-button>
  </div>
</template>

<script>
import { ref, inject, provide } from 'vue';
import InputComponent from '../components/InputComponent.vue';
import createPostButton from '../components/createPostButton.vue';
import SelectCommunity from '../components/SelectCommunity.vue';
export default {
  name: 'createPostView',
  setup() {
    let obj = ref({
      title: '',
      str: '',
    });
    let community = ref({ community: '' });
    provide('communityData', community);
    provide('postData', obj);
    let isAuthenticated = inject('authenticated');
    return { obj, isAuthenticated, community };
  },
  components: { InputComponent, createPostButton, SelectCommunity },
  
};
</script>
