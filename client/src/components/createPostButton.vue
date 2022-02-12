<template>
  <button
    class="text-base px-10 py-1 shadow-sm self-end dark:bg-sky-800 hover:dark:bg-sky-700 bg-blue-500 rounded-full hover:bg-blue-400 transition-all font-bold text-white"
    @click="createPost()"
  >
    Create
  </button>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const obj = inject('postData');
    const community = inject('communityData');
    return { obj, community };
  },
  methods: {
    async createPost() {
      try {
        await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            query: `
            mutation CREATE_POST($userId: String!, $communityId: String!, $postInput: PostInput!) {
                createPost(userId: $userId, communityId: $communityId, postInput: $postInput) {
                    id
                    title
                    createdAt
                    user {
                    id
                    username
                    email
                    }
                    comments{
                    id
                    text
                    }
                }
            }
            `,
            variables: {
              userId: JSON.parse(sessionStorage.getItem('user')).id,
              communityId: this.community.community,
              postInput: {
                title: this.obj.title,
                str: this.obj.str,
              },
            },
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data == null) {
              throw Error(
                'You cant create a post at this moment. Try again later'
              );
            }
            this.$router.push(`/community/${this.community.community}`)
            return res.data.createPost;
          })
          .catch((err) => {
            throw err;
          });
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>
