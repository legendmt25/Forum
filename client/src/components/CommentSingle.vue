<template>
  <div class="p-2">
    <div class="text-xs font-semibold">
    {{ comment.user.username }}:
    </div>
    <div class="pl-2">
      {{ comment.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: { comment: Object },
};
</script>
