<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black/75 z-40"
    @click.self="$emit('close')"
  >
    <div
      class="bg-neutral-50 p-20 absolute top-1/3 rounded left-1/2 -translate-y-1/2 transition-all z-50 shadow-md"
    >
      <button
        class="self-end font-bold text-black hover:text-white shadow-sm transition-all hover:bg-blue-400 rounded-full border px-2"
        @click.prevent="$emit('close')"
      >
        X
      </button>
      <div class="flex gap-5">
        <div class="flex flex-col gap-2 w-1/2">
          <h2 class="font-bold border-b py-2">Create a community</h2>
          <input-component which="community" property="name"></input-component>
          <input-component
            which="community"
            property="description"
          ></input-component>
          <button @click="$emit('close')"></button>
          <button
            class="rounded-full bg-blue-600 hover:bg-blue-500 p-2 transition-all text-white font-bold text-sm"
            @click="createCommunity()"
          >
            Create
          </button>
        </div>
        <div class="py-2 w-1/2">
          <select-component
            size="4"
            which="community"
            property="categoryName"
            :list="categories"
          ></select-component>
          <div class="flex gap-0">
            <input class="rounded-l z-10 p-1" v-model="category" />
            <button
              type="button"
              @click="addCategory()"
              class="rounded-r border shadow-sm pl-10 pr-5 relative right-5 text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all"
            >
              Add
            </button>
          </div>
          <span class="text-xs leading-normal font-semibold text-neutral-500"
            >*You won't be able to change the category after making the
            community</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, ref } from 'vue';
import InputComponent from './InputComponent.vue';
import { mapToSelectItems } from './utility';
import SelectComponent from './SelectComponent.vue';
export default {
  data() {
    return {
      categories: [],
      category: '',
    };
  },
  setup() {
    const obj = ref({
      name: '',
      description: '',
      categoryName: '',
    });

    provide('communityData', obj);
    const isAuthenticated = inject('authenticated');
    return {
      obj,
      isAuthenticated,
    };
  },
  async created() {
    this.categories = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
        query LIST_CATEGORIES {
            categories {
                id
                name
            }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.categories);
    this.categories = mapToSelectItems(this.categories, 'name', 'name');
  },
  methods: {
    async addCategory() {
      try {
        await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            query: `
            mutation CREATE_CATEGORY($categoryInput: CategoryInput!) {
                createCategory(categoryInput: $categoryInput) {
                    id
                    name
                }
            }
            `,
            variables: {
              categoryInput: {
                name: this.category,
              },
            },
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data == null) {
              throw new Error(res);
            }
            this.categories.push({
              text: res.data.createCategory.name,
              value: res.data.createCategory.name
            });
          })
          .catch((err) => {
            throw err;
          });
      } catch (err) {
        console.log(err);
      }
    },
    async createCommunity() {
      if (this.obj.categoryName == '') {
        return;
      }
      let community = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation CREATE_COMMUNITY($categoryName: String!, $userId: String!, $community: CommunityInput!) {
            createCommunity(categoryName: $categoryName, adminId: $userId, communityInput: $community) {
                id
                name
                description
            }
        }`,
          variables: {
            categoryName: this.obj.categoryName,
            userId: JSON.parse(sessionStorage.getItem('user')).id,
            community: {
              name: this.obj.name,
              description: this.obj.description,
            },
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.createCommunity);
      console.log(community);
      this.$router.push(`/community/${community.id}`);
    },
  },
  components: { InputComponent, SelectComponent },
};
</script>
