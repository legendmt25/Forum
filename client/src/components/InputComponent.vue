<template>
  <label class="flex flex-col gap-2">
    <span class="font-bold">{{ label }}</span>
    <input
      :type="type"
      class="shadow-md dark:bg-neutral-600 dark:text-white form-input mt-1 block w-full rounded border"
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
