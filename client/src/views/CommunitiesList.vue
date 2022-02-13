<template>
  <div>
    <div class="flex justify-center gap-2">
      <communities-list category="random"></communities-list>
      <communities-list category="all"></communities-list>
      <div class="flex flex-col gap-4">
        <communities-list category="random"></communities-list>
        <communities-list category="gaming"></communities-list>
      </div>
    </div>
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
