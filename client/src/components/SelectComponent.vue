<template>
  <label class="flex flex-col gap-2">
    <span class="text-gray-700 dark:text-white font-bold">{{ label }}</span>
    <select
      :size="size"
      class="form-select dark:bg-neutral-700 shadow-md border rounded w-full"
      v-model="obj[property]"
    >
      <option v-for="(el, index) in list" :value="el.value" :key="index">
        {{ el.text }}
      </option>
    </select>
  </label>
</template>

<script>
import { inject } from 'vue';
import { label } from './utility';
export default {
  props: {
    size: { type: String, default: "1" },
    which: String,
    property: String,
    list: Array,
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
