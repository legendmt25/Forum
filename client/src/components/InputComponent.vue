<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <input
      :type="type"
      class="shadow-md form-input mt-1 block w-full rounded border"
      :name="obj[property]"
      v-model="obj[property]"
    />
  </label>
</template>

<script>
import { inject } from 'vue';
import { label } from './utility';

export default {
  props: {
    which: String,
    property: String,
    type: { type: String, default: 'text' },
  },
  setup(props) {
    const obj = inject(`${props.which}Data`);
    return {
      obj,
    };
  },
  computed: {
    label() {
      return label(this.property);
    },
  },
};
</script>
