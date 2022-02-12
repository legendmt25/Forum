<template>
  <button v-if="isAuthenticated" type="submit" @click.prevent="joinCommunity($event)" class="">Join</button>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    community: Object,
  },
  setup() {
    const isAuthenticated = inject('authenticated');
    return { isAuthenticated };
  },
  methods: {
    async joinCommunity(event) {
      await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation JOIN_COMMUNITY($communityId: String!, $userId: String!) {
            joinCommunity(communityId: $communityId, userId: $userId) {
              id
              name
            }
          }
          `,
          variables: {
            communityId: this.community.id,
            userId: JSON.parse(sessionStorage.getItem('user')).id,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.joinCommunity);
        event.target.classList.add('bg-green-500');
        event.target.classList.remove('hover:bg-blue-600');
    },
  },
};
</script>
