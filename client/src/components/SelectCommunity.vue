<template>
  <select-component
    which="community"
    property="community"
    :list="authUserCommunities"
  ></select-component>
</template>

<script>
import SelectComponent from './SelectComponent.vue';
import { mapToSelectItems } from './utility';
export default {
  data() {
    return {
      authUserCommunities: [],
    };
  },
  components: { SelectComponent },
  async created() {
    try {
      this.authUserCommunities = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
          query GET_USER_COMMUNITIES($userId: String!) {
            user(userId: $userId) {
              communities {
                id
                name
              }
            }
          }`,
          variables: {
            userId: JSON.parse(sessionStorage.getItem('user')).id,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data == null) {
            throw Error('User not found');
          }
          return res.data.user.communities;
        })
        .catch((err) => {
          throw err;
        });
      this.authUserCommunities = mapToSelectItems(
        this.authUserCommunities,
        'name',
        'id'
      );
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
