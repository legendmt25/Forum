<template>
  <div class="w-full sm:w-1/2 mx-auto p-10 bg-slate-200 rounded shadow-lg">
    <form>
      <div class="flex gap-2">
        <input-component which="user" class="w-1/2" property="firstName"></input-component>
        <input-component which="user" class="w-1/2" property="lastName"></input-component>
      </div>
      <input-component which="user" property="email" type="email"></input-component>
      <div class="flex gap-2">
        <input-component which="user" class="w-1/2" property="username"></input-component>
        <input-component
          which="user"
          class="w-1/2"
          property="password"
          type="password"
        ></input-component>
      </div>
      <select-gender property="gender"></select-gender>
      <input-component
        which="user"
        property="birthDate"
        type="date"
      ></input-component>
      <location-input property="location"></location-input>
      <register-user-button
        class="border-slate-400 border-2 rounded-full p-2 px-5 mt-2 hover:text-white hover:bg-blue-400 hover:border-blue-400 shadow:md hover:shadow-xl"
      ></register-user-button>
    </form>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import InputComponent from '../components/InputComponent.vue';
import LocationInput from '../components/LocationInput.vue';
import SelectGender from '../components/SelectGender.vue';
import RegisterUserButton from '../components/RegisterUserButton.vue';
export default {
  name: 'registerView',
  setup() {
    let obj = ref({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      birthDate: '',
      gender: '',
      location: '',
    });

    provide('userData', obj);
    return {
      obj,
    };
  },
  components: {
    InputComponent,
    LocationInput,
    SelectGender,
    RegisterUserButton,
  },
};
</script>
