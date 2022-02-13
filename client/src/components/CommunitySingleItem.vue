<template>
  <li :data-community-id="community.id" class="md:flex justify-between p-3 text-center">
    <router-link
      class="md:flex gap-2 md:text-base text-sm font-light hover:font-extralight hover:text-blue-400"
      :to="{ name: 'communityDetailsView', params: { id: community.id } }"
    >
      <img class="w-7 h-7 mx-auto" :src="avatarImage" alt="communityImage" />
      {{ community.name }}
      
    </router-link>
    <join-community-button
        :community="community"
        class="hover:bg-blue-600 rounded-full w-full md:w-auto text-white font-semibold text-sm bg-blue-500 px-3 py-1 transition-all shadow-md"
      ></join-community-button>
  </li>
</template>

<script>
import JoinCommunityButton from './JoinCommunityButton.vue';
import { communityAvatarImage } from './utility';
export default {
  props: { community: Object },

  components: { JoinCommunityButton },
  computed: {
    avatarImage() {
      return communityAvatarImage(this.community.avatarImage);
    },
  },
};
</script>
