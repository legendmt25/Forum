<template>
  <div class="flex justify-center gap-2">
    <div>
      <communities-list class="mb-2" category="all"></communities-list>
    </div>
    <div class="w-1/3">
      <communities-list category="all"></communities-list>
    </div>
    <div>
    <communities-list class="mb-2" category="all"></communities-list>
    <communities-list category="all"></communities-list>
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
