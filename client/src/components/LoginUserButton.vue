<template>
  <button type="submit" @click.prevent="login()">Login</button>
</template>

<script>
import { inject } from 'vue';
import { addSubscriptionToServer } from './utility';
export default {
  setup() {
    let obj = inject('userData');
    let isAuthenticated = inject('authenticated');
    return { obj, isAuthenticated };
  },
  methods: {
    async login() {
      try {
        let user = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            query: `
          query LOGIN($userCredentials: UserCredentialsInput!) {
            loginUser(userCredentialsInput: $userCredentials) {
              id
              createdAt
              username
              firstName
              lastName
              email
              gender
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
              userCredentials: {
                ...this.obj,
              },
            },
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data == null) {
              throw Error(
                'Authentication failed: ' + JSON.stringify(res.errors)
              );
            }
            return res.data.loginUser;
          })
          .catch((err) => {
            throw err;
          });
        this.isAuthenticated = true;
        sessionStorage.setItem('user', JSON.stringify(user));
        this.$router.push('/');
        addSubscriptionToServer();
      } catch (err) {
        alert('Invalid username or password');
        console.log(err);
      }
    },
  },
};
</script>
