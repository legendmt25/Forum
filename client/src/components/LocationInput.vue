<template>
  <SelectComponent which="user" :property="property" :list="list"></SelectComponent>
</template>

<script>
import SelectComponent from './SelectComponent.vue';
import { mapToSelectItems } from './utility';
export default {
  props: {
    property: String,
  },
  data() {
    return {
      list: [],
    };
  },
  async created() {
    this.list = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
        query LIST_COUNTRIES {
            countries {
                iso3
                country
            }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.countries);
    this.list = mapToSelectItems(this.list, 'country', 'iso3');
  },

  components: { SelectComponent },
};
</script>
