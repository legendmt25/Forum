<template>
  <ol class="bg-neutral-50 dark:bg-neutral-600 list-inside rounded shadow-lg">
    <community-single-item
      v-for="community in communities"
      :key="community.id"
      :community="community"
    ></community-single-item>
  </ol>
</template>

<script>
import CommunitySingleItem from "./CommunitySingleItem.vue";
export default {
  components: { CommunitySingleItem },
  props: {
    category: String,
  },
  data() {
    return {
      communities: [],
    };
  },
  async created() {
    this.communities = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `
        query LIST_COMMUNITIES {
            communities { 
                id
                name
                description
            }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.communities);
  },
};
</script>
