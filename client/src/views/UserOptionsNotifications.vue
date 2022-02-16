<template>
  <div
    class="dark:text-white p-2"
    v-for="(option, key) in user.options"
    :key="key"
  >
    {{ key }}
    <input
      type="checkbox"
      class="form-checkbox shadow-sm"
      v-model="user.options[key]"
      @change="updateOptions()"
    />
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const user = inject('user');
    return {
      user,
    };
  },
  methods: {
    async updateOptions() {
      this.user.options = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation UPDATE_OPTIONS($userId: String!, $userOptionsInput: UserOptionInput!) {
                updateOptions(userId: $userId, userOptionsInput: $userOptionsInput) {
                    id
                    username
                    options {
                      inboxMessages
                      upvotesOnComments
                      upvotesOnPosts
                      newFollowers
                      newPosts
                    }
                }
            }`,
          variables: {
            userId: this.user.id,
            userOptionsInput: this.user.options,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.updateOptions.options);
      sessionStorage.setItem('user', JSON.stringify(this.user));
    },
  },
};
</script>
