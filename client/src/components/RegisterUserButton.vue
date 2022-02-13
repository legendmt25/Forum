<template>
  <button type="submit" @click.prevent="registerUser()" class="">
    Register
  </button>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const obj = inject('userData');
    return {
      obj,
    };
  },
  methods: {
    async registerUser() {
      await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
        mutation ADD_USER($userData:UserInput!) {
            register(userData: $userData)
            {
                id
                email
            }
        }
        `,
          variables: {
            userData: {
              ...this.obj,
            },
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.register);
      this.$router.push('/login');
    },
  },
};
</script>
