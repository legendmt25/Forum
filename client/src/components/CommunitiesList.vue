<template>
  <div>
    <div class="p-2 bg-neutral-300 w-full text-center text-xs md:text-base">{{ title }}</div>
    <ol
      class="bg-neutral-50 dark:bg-neutral-600 list-inside rounded shadow-md dark:text-white"
    >
      <community-single-item
        v-for="community in communities"
        :key="community.id"
        :community="community"
      ></community-single-item>
    </ol>
  </div>
</template>

<script>
import CommunitySingleItem from './CommunitySingleItem.vue';
export default {
  components: { CommunitySingleItem },
  props: {
    category: { type: String, default: 'all' },
  },
  data() {
    return {
      communities: [],
      categoryThis: '',
    };
  },
  async created() {
    if (this.category == 'all') {
      this.communities = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
          query LIST_COMMUNITIES {
              communities {
                  id
                  name
                  description
                  avatarImage
              }
          }`,
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.communities);
      return;
    }

    let communitiesByCategory = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
        query LIST_CATEGORIES_WITH_COMMUNITIES($categoryName: String) {
            categories(categoryName: $categoryName) {
                id
                name
                communities {
                  id
                  name
                  description
                  avatarImage
                }
            }
        }`,
        variables: {
          categoryName: this.category == 'random' ? null : this.category,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.categories);
    communitiesByCategory =
      communitiesByCategory[
        parseInt(Math.random() * communitiesByCategory.length - 1)
      ];
    this.categoryThis = communitiesByCategory.name;
    this.communities = communitiesByCategory.communities;
  },
  computed: {
    title() {
      if (this.categoryThis == '') {
        return `Top communities`;
      }
      return `Top ${this.categoryThis} communities`;
    },
  },
};
</script>
