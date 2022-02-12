<template>
  <div class="p-2 flex flex-col justify-center">
    <form class="flex flex-col gap-5" @submit.prevent="comment()">
      <div class="w-100 flex justify-center">
        <button
          @keyup.enter="submit"
          class="
            text-md
            rounded-full
            border
            shadow-md
            border-blue-400
            bg-white
            px-5
            py-1
            transition-all
            hover:bg-blue-400 hover:text-white hover:dark:text-white
            dark:bg-sky-800 dark:border-0
            hover:dark:bg-sky-700
          "
        >
          Comment
        </button>
      </div>
      <textarea
        v-model="commentText"
        class="
          form-textarea
          rounded
          border
          w-full
          h-12
          max-h-24
          mb-0.5
          shadow-lg
          transition-all
          resize-none
          hover:h-24
          focus:h-24
          dark:bg-neutral-700
        "
        placeholder="Insert comment here"
      ></textarea>
    </form>
  </div>
</template>

<script>
import { inject, toRef } from "vue";

export default {
  props: {
    postId: String,
    postComments: Array,
  },
  setup(props) {
    const isAuthenticated = inject("authenticated");
    const comments = toRef(props, "postComments");
    return {
      comments,
      isAuthenticated,
    };
  },
  data() {
    return {
      commentText: "",
    };
  },
  methods: {
    async comment() {
      if (this.commentText == "") {
        return;
      }
      //TODO: Post Comment fetch()
      const comment = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
            userId: JSON.parse(sessionStorage.getItem("user")).id,
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
      this.commentText = "";
    },
  },
};
</script>
