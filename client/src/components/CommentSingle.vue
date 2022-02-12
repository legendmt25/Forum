<template>
  <div class="p-2">
    <div class="text-xs font-semibold">
    {{ comment.user.username }}: {{ createdAt }}
    </div>
    <div class="pl-2">
      {{ comment.text }}
    </div>
  </div>
</template>

<script>import { transformDate } from "./utility";

export default {
  props: { comment: Object },
  computed: {
    createdAt() {
      return transformDate(this.comment.createdAt);
    }
  }
};
</script>
