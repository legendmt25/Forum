<template>
  <div class="relative">
    <button
      class="flex items-center gap-3 select-none text-sm font-light hover:text-slate-500"
      @click="toggle($event)"
    >
      <slot name="button"></slot>
    </button>

    <transition
      enter-active-class="transition-all duration-750 ease-out"
      leave-active-class="transition-all duration-750 ease-in"
      enter-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <ul
        class="absolute bg-white rounded shadow-lg text-sm text-left w-32"
        v-if="open"
        :class="placement == 'left' ? 'right-0' : 'left-0'"
      >
        <slot name="list-items">a</slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    placement: String,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle(event) {
      this.open = !this.open;
      if(this.open) {
        event.target.parentNode.querySelector('svg').classList.add('rotate-180')
      } else {
        event.target.parentNode.querySelector('svg').classList.remove('rotate-180')
      }
    },
  },
};
</script>
