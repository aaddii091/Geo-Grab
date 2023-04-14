<template>
  <div class="effect">
    <div class="register-placement">
      <div class="register">
        <h1>REGISTER</h1>
        <form @submit.prevent="res">
          <input
            type="text"
            required
            placeholder="First Name"
            v-model="fname"
            autocomplete="on"
            class="input_register"
          />

          <input
            type="text"
            required
            placeholder="Last Name"
            v-model="lname"
            autocomplete="on"
            class="input_register"
          />

          <input
            type="email"
            required
            placeholder="Email"
            v-model="email"
            class="input_register"
            autocomplete="on"
          />

          <input
            type="password"
            required
            placeholder="Password"
            v-model="password"
            autocomplete="on"
            class="input_register"
          />
          <button class="primary-button">Register</button>
          <p>Already a member? <span @click="redirect">Login !</span></p>
          <p v-if="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// imports
import useCollection from "@/composables/useCollection";

import router from "@/router";
import { ref, computed } from "vue";

// imports

import useRegister from "@/composables/UseRegister";
export default {
  setup() {
    // --------------------ADDING USER DATA
    const { adding } = useCollection();
    const lat = ref([]);
    const lng = ref([]);

    // -------------------------------------------
    // ref variable
    // console.log(userID.value);
    const { register, error, uid } = useRegister();
    const fname = ref("");
    const lname = ref("");
    const email = ref("");
    const password = ref("");
    const recieved_location = ref("");
    const displayName = computed(() => {
      return fname.value + " " + lname.value;
    });
    //Getting location
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      lat.value = pos.lat;
      lng.value = pos.lng;
      console.log(lat.value, lng.value);
    });
    // functions
    const res = async () => {
      console.log(email.value);
      await register(displayName.value, password.value, email.value);
      if (!error.value) {
        console.log("signed up !");
        await handleSubmit();
        // router.push({ name: "login" });
      }
    };

    const userID = ref(uid.value);
    // adding location to user
    const handleSubmit = async () => {
      try {
        if (lat.value) {
          console.log(uid.value);
          const set = {
            lat: lat.value,
            lng: lng.value,
            userID: uid.value,
          };
          await adding(set);
          if (!error.value) {
            router.push({ name: "login" });
            console.log("hi");
          }
          console.log(set);
          lat.value = "";
          lng.value = "";
          userID.value = "";
        }
      } catch (err) {
        console.log(err.message, "From Input Data for Firestore");
        lat.value = "";
        lng.value = "";
        userID.value = "";
      }
      lat.value = "";
      lng.value = "";
      userID.value = "";
    };
//redirecting user to login 
const redirect = ()=>{
  router.push({name:"login"})
}
    return { res, fname, lname, email, password, register, error , redirect};
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-placement {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.register {
  width: 400px;
  min-height: 400px;
  height: auto;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.068);
  /* -webkit-backdrop-filter: blur(5px); */
  backdrop-filter: blur(56px);
  background-color: rgba(255, 255, 255, 0.425);
  border-radius: 20px;
}

.effect {
  background: url(../assets/images/Abstract\ Grainy\ Gradient\ Background\ 11.png);
  height: 100vh;
  background-size: cover;
}
</style>
