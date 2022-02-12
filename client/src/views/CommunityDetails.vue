<template>
  <div>
    <div>
      <img alt="community image" />
      <h2 class="font-semibold text-2xl">{{ community.name }}</h2>
      <div class="text-sm">{{ community.description }}</div>
    </div>
    <post-single
      v-for="post in community.posts"
      :key="post.id"
      :post="post"
    ></post-single>
  </div>
</template>

<script>
import PostSingle from '../components/PostSingle.vue';
export default {
  name: 'communityDetailsView',
  components: { PostSingle },
  data() {
    return {
      community: Object,
    };
  },
  async created() {
    this.community = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
            query GET_COMMUNITY($communityId: String!) {
                community(communityId: $communityId) {
                    id
                    name
                    description
                    posts {
                        id
                        title
                        user {
                            id
                            username
                        }
                        comments {
                            id
                            text
                            user {
                              id
                              username
                            }
                        }
                    }
                }
            }`,
        variables: {
          communityId: this.$route.params.id,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.community);
  },
};
</script>
