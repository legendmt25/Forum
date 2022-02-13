<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center p-40 bg-black/75 z-40"
    @click.self="$emit('close')"
  >
    <div
      class="bg-neutral-50 dark:bg-neutral-700 dark:text-white px-20 py-10 rounded transition-all z-50 shadow-md"
    >
      <div class="flex justify-between border-b py-2">
        <h2 class="font-bold w-full py-2">Create a community</h2>

        <button
          class="self-end font-bold dark:text-white text-black hover:text-white py-2 px-4 shadow-sm transition-all hover:bg-red-400 border-red-400 rounded-full border"
          @click.prevent="$emit('close')"
        >
          X
        </button>
      </div>
      <div class="flex flex-col gap-5 py-10">
        <div class="flex flex-col gap-5">
          <input-component which="community" property="name"></input-component>
          <input-component
            which="community"
            property="description"
          ></input-component>
        </div>
        <div class="py-2 flex flex-col gap-2">
          <div class="flex gap-2 select-none flex-wrap">
            <div
              :class="{
                'bg-sky-500 text-white': selectedCategory === category.name,
              }"
              class="border px-3 border-sky-500 cursor-pointer rounded-full"
              v-for="category in categories"
              :key="category.id"
              @click="
                selectedCategory =
                  selectedCategory !== category.name ? category.name : ''
              "
            >
              {{ category.name }}
            </div>
          </div>
          <div class="flex shadow-md">
            <input
              class="dark:bg-neutral-600 dark:text-white form-input shadow-none w-full rounded-l border"
              v-model="category"
            />
            <button
              type="button"
              @click="addCategory()"
              class="rounded-r px-8 text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all"
            >
              Add
            </button>
          </div>
          <span class="text-xs leading-normal font-semibold text-neutral-500"
            >*You won't be able to change the category after creating the
            community</span
          >
        </div>
        <button
          class="rounded-full bg-blue-600 hover:bg-blue-500 p-2 transition-all text-white font-bold text-sm"
          @click="createCommunity()"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, ref } from 'vue';
import InputComponent from './InputComponent.vue';

export default {
  data() {
    return {
      categories: [],
      category: '',
      selectedCategory: '',
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
            this.categories.push(res.data.createCategory);
          })
          .catch((err) => {
            throw err;
          });
      } catch (err) {
        console.log(err);
      }
    },
    async createCommunity() {
      if (this.selectedCategory == '') {
        return false;
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
            categoryName: this.selectedCategory,
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
      this.$router.push(`/community/${community.id}`);
    },
  },
  components: { InputComponent },
};
</script>
