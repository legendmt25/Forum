<template>
  <div
    ref="mainPost"
    class="p-2 overflow-hidden"
    :class="!showMore ? 'max-h-72' : ''"
  >
    <slot name="section"></slot>
  </div>
  <button
    :class="showMore ? 'hidden' : ''"
    class="w-full absolute bottom-0 h-10 text-center text-white leading-9"
    @click="showMore = !showMore"
  >
    <div
      class="blur group-hover:bg-black/60 w-full h-10 transition-all ease-in-out"
    ></div>
    <div class="group-hover:opacity-100 opacity-0 relative bottom-10">
      Show more
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
  mounted() {
    this.showMore =
      this.$refs.mainPost.offsetHeight == this.$refs.mainPost.scrollHeight;
  },
};
</script>
