<template>
  <div class="w-full mx-auto bg-slate-50 shadow-2xl rounded">
    <div class="group relative border-b-2 border-slate-400">
      <div class="text-sm font-extralight pt-2 pl-2">
        <span>Posted by: {{ post.user.username }}</span>
      </div>
      <div class="p-2 pb-0">
        <h3 class="font-semibold text-black">{{ post.title }}</h3>
      </div>
      <show-more-button>
        <template #section>
          {{ post.title }}
        </template>
      </show-more-button>
    </div>
    <input-comment
      :postComments="post.comments"
      :postId="post.id"
    ></input-comment>
    <div class="pl-2">
      <div v-if="showComments">
        Comments:
        <comment-single
          v-for="comment in post.comments"
          :key="comment.id"
          :comment="comment"
        ></comment-single>
      </div>
      <div v-else>
        <button
          class="w-full hover:text-blue-400 p-2 text-xs"
          @click.prevent="showComments = !showComments"
        >
          View comments
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CommentSingle from './CommentSingle.vue';
import InputComment from './InputComment.vue';
import ShowMoreButton from './showMoreButton.vue';
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      showComments: false,
    };
  },

  components: { CommentSingle, InputComment, ShowMoreButton },
};
</script>
