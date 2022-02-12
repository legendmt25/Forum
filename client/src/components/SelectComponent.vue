<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <select class="form-select rounded w-full" v-model="obj[property]">
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
    which: String,
    property: String,
    list: Array,
  },
  setup(props) {
    const obj = inject(`${props.which}Data`);
    return {
      obj
    };
  },
  computed: {
    label() {
      return label(this.property);
    },
  },
};
</script>
