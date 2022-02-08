<template>
  <div :data-community-id="community.id">
    {{community}}
    <router-link :to="{ name: 'CommunityDetails', params: { id: community.id }}">Details</router-link>
  </div>
</template>

<script>
export default {
  props: { community: Object },
};
</script>
