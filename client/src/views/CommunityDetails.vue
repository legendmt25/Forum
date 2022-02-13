<template>
  <div class="flex flex-row gap-4">
    <button @click="addImage()">
      <img :src="avatarImageSrc" class="w-10" alt="community image" />
    </button>
    <div>
      <h2 class="font-semibold text-2xl">{{ community.name }}</h2>
      <p class="text-sm">{{ community.description }}</p>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="flex flex-col items-center w-1/2 gap-3">
      <div class="flex gap-3 bg-neutral-50 shadow-sm roudned w-full p-3">
        <router-link :to="{ name: 'createPostView', params: {} }">
          <input class="p-1 pl-10 w-full" placeholder="Create Post" type="text" />
        </router-link>
      </div>
      <post-single
        v-for="post in community.posts"
        :key="post.id"
        :post="post"
      ></post-single>
    </div>
  </div>
</template>

<script>
import PostSingle from '../components/PostSingle.vue';
export default {
  name: 'communityDetailsView',
  components: { PostSingle },
  data() {
    return {
      community: Object,
    };
  },
  async created() {
    this.community = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
            query GET_COMMUNITY($communityId: String!) {
                community(communityId: $communityId) {
                    id
                    name
                    description
                    avatarImage
                    posts {
                        id
                        title
                        str
                        createdAt
                        user {
                            id
                            username
                        }
                        comments {
                            id
                            text
                            createdAt
                            user {
                              id
                              username
                            }
                        }
                    }
                    admin {
                      id
                    }
                }
            }`,
        variables: {
          communityId: this.$route.params.id,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.community);
  },
  methods: {
    async addImage() {
      if(this.community.admin.id != JSON.parse(sessionStorage.getItem('user')).id) {
        return;
      }
      const input = document.createElement('input');
      const formData = new FormData();
      input.type = 'file';
      input.click();
      input.addEventListener('change', async () => {
        if (input.files.length == 0) {
          return;
        }
        formData.append(
          'operations',
          JSON.stringify({
            query: `
            mutation UPLOAD_AVATAR_COMMUNITY($communityId: String!, $file: Upload!) {
              changeAvatar(file: $file, communityId: $communityId) {
                id
                avatarImage
              }
            }`,
            variables: {
              communityId: this.$route.params.id,
              file: null,
            },
          })
        );
        formData.append('map', '{ "0": ["variables.file"] }');
        formData.append('0', input.files[0]);

        const updatedCommunityAvatar = await fetch(
          'http://localhost:3000/graphql',
          {
            method: 'POST',
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((res) => res.data.changeAvatar);
        this.community.avatarImage = updatedCommunityAvatar.avatarImage;
      });
    },
  },
  computed: {
    avatarImageSrc() {
      return `http://localhost:3000/${this.community.avatarImage}`;
    },
  },
};
</script>
