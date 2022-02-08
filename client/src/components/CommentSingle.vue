<template>
  <div>
    {{ comment.text }}
  </div>
</template>

<script>
export default {
  props: { comment: Object },
};
</script>
