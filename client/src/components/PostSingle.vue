<template>
  <div class="flex flex-row gap-10">
    <div>
      {{ post.user.id }}
      {{ post.user.username }}
    </div>
    <div>
      {{ post.title }}
    </div>
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
