<template>
  <div class="home">
    <communities-list></communities-list>
  </div>
</template>

<script>
// @ is an alias to /src
import CommunitiesList from '../components/CommunitiesList.vue';

export default {
  name: 'Home',
  components: {
    CommunitiesList,
  },
};
</script>
