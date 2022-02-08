<template>
  <post-single
      v-for="post in posts"
      :key="post.id"
      :post="post"
    ></post-single>
</template>

<script>
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
      body: {
        query: `
            query LIST_POSTS {
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
          `,
      },
    })
      .then((res) => res.json())
      .then((res) => res.data.posts);
  },
};
</script>
