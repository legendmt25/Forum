<template>
  <div class="w-full flex flex-col gap-5">
    <div
      class="w-full mx-auto bg-neutral-50 dark:bg-neutral-600 dark:text-white shadow-md rounded"
    >
      <div class="text-xs font-bold text-gray-500 dark:text-gray-300 pt-2 pl-2">
        <span>Posted by: {{ post.user.username }}: {{ createdAt }} </span>
      </div>
      <div class="flex flex-col px-4">
        <div class="p-2 py-5 border-b">
          <h3 class="font-bold text-xl dark:text-white text-black">
            {{ post.title }}
          </h3>
        </div>
        <show-more-button>
          <template #section>
            <div class="py-4 px-3">
              {{ post.str }}
            </div>
          </template>
        </show-more-button>
      </div>
    </div>
    <div
      class="py-2 w-full bg-neutral-50 dark:bg-neutral-600 dark:text-white drop-shadow-md rounded"
    >
      <input-comment
        :postComments="post.comments"
        :postId="post.id"
      ></input-comment>
      <div class="px-5 py-5">
        <div v-if="showComments">
          Comments:
          <comment-single
            v-for="comment in post.comments"
            :key="comment.id"
            :comment="comment"
          ></comment-single>
        </div>
        <div v-else-if="post.comments.length > 0">
          <button
            class="w-full hover:text-blue-400 p-2 text-md"
            @click.prevent="showComments = !showComments"
          >
            Show comments
          </button>
        </div>
        <div v-else>No comments</div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentSingle from './CommentSingle.vue';
import InputComment from './InputComment.vue';
import ShowMoreButton from './showMoreButton.vue';
import { transformDate } from './utility';
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      showComments: false,
    };
  },
  computed: {
    createdAt() {
      return transformDate(this.post.createdAt);
    }
  },
  components: { CommentSingle, InputComment, ShowMoreButton },
};
</script>
