<template>
  <div>
    {{ post.title }}
    {{ post.user.id }}
    {{ post.user.username }}
  </div>
  <comment-single
    v-for="comment in post.comments"
    :key="comment.id"
    :comment="comment"
  ></comment-single>
</template>

<script>
import CommentSingle from './CommentSingle.vue';
export default {
  components: { CommentSingle },
  props: {
    post: Object,
  },
};
</script>
