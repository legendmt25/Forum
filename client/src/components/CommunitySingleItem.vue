<template>
  <li :data-community-id="community.id" class="list-item p-3 text-center">
    <router-link
      class="md:flex gap-2 justify-between font-light hover:font-extralight hover:text-blue-400"
      :to="{ name: 'communityDetailsView', params: { id: community.id } }"
    >
      <img src="" alt="communityImage" />
      {{ community.name }}
      <join-community-button
        :community="community"
        class="hover:bg-blue-600 rounded-full w-full md:w-auto text-white font-semibold text-sm bg-blue-500 px-3 py-1 transition-all shadow-md"
      ></join-community-button>
    </router-link>
  </li>
</template>

<script>
import JoinCommunityButton from './JoinCommunityButton.vue';
export default {
  props: { community: Object },
  
  components: { JoinCommunityButton },
};
</script>
