<template>
  <div class="container">
    <communities-list></communities-list>
  </div>
</template>

<script>
import CommunitiesList from '../components/CommunitiesList.vue';
export default {
  name: 'communitiesListView',
  components: {
    CommunitiesList,
  },
};
</script>
