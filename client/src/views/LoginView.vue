<template>
  <div class="flex justify-center">
    <div
      class="w-full md:w-3/4 bg-neutral-50 dark:bg-neutral-700 dark:text-white rounded shadow-md p-10"
    >
      <form>
        <fieldset class="border border-solid border-gray-300 p-4 shadow-md">
          <legend class="text-2xl font-extralight">Login</legend>
          
          <div class="p-6 flex flex-col gap-5">
            <input-component which="user" property="username"></input-component>
            <input-component
              which="user"
              property="password"
              type="password"
            ></input-component>
            <div class="flex justify-center">
              <login-user-button
                class="border-2 border-slate-400 rounded-full p-2 px-5 hover:text-white hover:bg-blue-400 hover:border-blue-400 shadow:md hover:shadow-xl"
              ></login-user-button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import InputComponent from '../components/InputComponent.vue';
import { ref, provide } from 'vue';
import LoginUserButton from '../components/LoginUserButton.vue';
export default {
  name: 'loginView',
  setup() {
    let obj = ref({
      username: '',
      password: '',
    });

    provide('userData', obj);
    return {
      obj,
    };
  },
  components: {
    InputComponent,
    LoginUserButton,
  },
};
</script>
