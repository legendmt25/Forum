<template>
  <input-component which="post" property="title"></input-component>
</template>

<script>
import { ref, inject, provide } from 'vue';
import InputComponent from '../components/InputComponent.vue';
export default {
  name: 'createPostView',
  setup() {
    let obj = ref({
      title: '',
      text: '',
    });
    provide('postData', obj);
    let isAuthenticated = inject('authenticated');
    return { obj, isAuthenticated };
  },
  components: { InputComponent },
};
</script>
