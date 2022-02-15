<template>
  <div>
    <post-single
      v-for="post in posts"
      :key="post.id"
      :post="post"
    ></post-single>
  </div>
</template>

<script>
import PostSingle from './PostSingle.vue';
export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
        query LIST_POSTS {
            posts {
                id
                title
                str
                createdAt
                user {
                    id
                    username
                }
                comments {
                    id
                    text
                    createdAt
                    user {
                        id
                        username
                    }
                }
            }
        }
    `,
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.posts);
  },
  components: { PostSingle },
};
</script>
