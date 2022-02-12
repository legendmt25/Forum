<template>
  <select-component which="user" :property="property" :list="genders"></select-component>
</template>

<script>
import SelectComponent from './SelectComponent.vue';
import { inject } from 'vue';
import { mapToSelectItems } from './utility';
export default {
  props: {
    property: String,
  },
  data() {
    return {
      genders: mapToSelectItems([{gender: 'Man'}, {gender: 'Woman'}, {gender: 'Other'}], 'gender', 'gender')
    };
  },
  setup() {
    const user = inject('userData');
    return {
      user,
    };
  },
  components: {
    SelectComponent,
  },
};
</script>
