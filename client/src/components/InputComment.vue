<template>
  <div class="p-2 flex flex-col justify-end">
    <form @submit.prevent="comment()">
      <textarea
        v-model="commentText"
        class="form-textarea rounded border w-full h-12 max-h-24 mb-0.5 shadow-lg transition-all resize-none hover:h-24 focus:h-24"
        placeholder="Insert comment here"
      ></textarea>
      <hr />
      <button
        @keyup.enter="submit"
        class="text-xs rounded-full border shadow-xl ml-auto border-blue-400 px-2 py-1 mt-0.5 transition-all hover:bg-blue-400 hover:text-white"
      >
        Comment
      </button>
    </form>
  </div>
</template>

<script>
import { inject, toRef } from 'vue';

export default {
  props: {
    postId: String,
    postComments: Array,
  },
  setup(props) {
    const isAuthenticated = inject('authenticated');
    const comments = toRef(props, 'postComments');
    return {
      comments,
      isAuthenticated,
    };
  },
  data() {
    return {
      commentText: '',
    };
  },
  methods: {
    async comment() {
      if (this.commentText == '') {
        return;
      }
      //TODO: Post Comment fetch()
      const comment = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation CREATE_COMMENT($userId: String!, $postId: String!, $commentInput: CommentInput!) {
            createComment(userId: $userId, postId: $postId, commentInput: $commentInput) {
              id
              text
              user {
                id
                username
              }
              replies {
                id
                text
              }
            }
          }
          `,
          variables: {
            userId: JSON.parse(sessionStorage.getItem('user')).id,
            postId: this.postId,
            commentInput: {
              text: this.commentText,
            },
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.createComment);
        console.log(this.comments);
      this.comments.push(comment);
      this.commentText = '';
    },
  },
};
</script>
