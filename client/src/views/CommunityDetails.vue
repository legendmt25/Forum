<template>
  <div>
    <div>{{ community.name }}</div>
    <div>{{ community.description }}</div>
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
